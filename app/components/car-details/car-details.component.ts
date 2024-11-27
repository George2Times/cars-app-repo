import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CarStorageService } from '../../services/car-storage.service';
import { Car, Service } from '../../services/car.model';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  car: Car = { id: 0, name: '', model: '', services: [] };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carStorageService: CarStorageService
  ) {
    const carId = this.route.snapshot.queryParams['id'];
    if (carId) {
      const existingCar = this.carStorageService.getCarById(Number(carId));
      if (existingCar) {
        this.car = existingCar;
      }
    }
  }

  ngOnInit() {
    const carId = this.route.snapshot.queryParams['id'];
    if (carId !== undefined) {
      const existingCar = this.carStorageService.getCarById(Number(carId));
      if (existingCar) {
        this.car = existingCar;
      }
    }
  }

  saveCar(): void {
    if (this.car.id) {
      this.carStorageService.updateCar(this.car);
    } else {
      this.car.id = Date.now(); // Generowanie unikalnego ID
      this.carStorageService.addCar(this.car);
    }
    this.router.navigate(['/']);
  }

  deleteCar(): void {
    if (this.car.id) {
      this.carStorageService.deleteCar(this.car.id);
      this.router.navigate(['/']);
    }
  }

  addService(): void {
    this.car.services.push({ part: '', cost: 0 });
  }

  deleteService(index: number): void {
    if (this.car.id !== undefined) {
      this.carStorageService.deleteService(this.car.id, index);
      const updatedCar = this.carStorageService.getCarById(this.car.id);
      if (updatedCar) {
        this.car = updatedCar;
      }
    }
  }  
}

