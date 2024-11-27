import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CarStorageService } from '../../services/car-storage.service';
import { Car } from '../../services/car.model';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars: Car[] = [];

  constructor(private carStorageService: CarStorageService) {
    this.cars = this.carStorageService.getCars();
  }

  deleteCar(id: number): void {
    this.carStorageService.deleteCar(id);
    this.cars = this.carStorageService.getCars();
  }
}
