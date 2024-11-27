import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarListComponent } from './car-list.component';
import { CarStorageService } from '../../services/car-storage.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let carStorageService: jasmine.SpyObj<CarStorageService>;

  beforeEach(async () => {
    const carSpy = jasmine.createSpyObj('CarStorageService', ['getCars', 'deleteCar']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CarListComponent],
      providers: [{ provide: CarStorageService, useValue: carSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    carStorageService = TestBed.inject(CarStorageService) as jasmine.SpyObj<CarStorageService>;
    carStorageService.getCars.and.returnValue(of([{ id: 1, name: 'Car A', model: 'Model A', services: [] }]));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load cars on init', () => {
    expect(component.cars.length).toBe(1);
    expect(carStorageService.getCars).toHaveBeenCalled();
  });

  it('should delete a car', () => {
    component.deleteCar(1);
    expect(carStorageService.deleteCar).toHaveBeenCalledWith(1);
    expect(component.cars.length).toBe(0);
  });
});
