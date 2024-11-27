import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarDetailsComponent } from './car-details.component';
import { CarStorageService } from '../../services/car-storage.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let fixture: ComponentFixture<CarDetailsComponent>;
  let carStorageService: jasmine.SpyObj<CarStorageService>;

  beforeEach(async () => {
    const carSpy = jasmine.createSpyObj('CarStorageService', ['getCarById', 'addCar', 'updateCar']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [CarDetailsComponent],
      providers: [
        { provide: CarStorageService, useValue: carSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { queryParams: { id: 1 } } } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    carStorageService = TestBed.inject(CarStorageService) as jasmine.SpyObj<CarStorageService>;
    carStorageService.getCarById.and.returnValue({ id: 1, name: 'Car A', model: 'Model A', services: [] });
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load existing car on init', () => {
    expect(component.car.name).toBe('Car A');
    expect(carStorageService.getCarById).toHaveBeenCalledWith(1);
  });

  it('should add a new service', () => {
    component.addService();
    expect(component.car.services.length).toBe(1);
  });

  it('should save a car', () => {
    component.saveCar();
    expect(carStorageService.updateCar).toHaveBeenCalledWith(component.car);
  });
});
