import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarStorageService {
  private cars: Car[] = this.loadCars() || this.initializeDefaultCars();

  constructor() {}

  getCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }  

  addCar(car: Car): void {
    this.cars.push(car);
    this.saveCars();
  }

  updateCar(updatedCar: Car): void {
    const index = this.cars.findIndex(car => car.id === updatedCar.id);
    if (index !== -1) {
      this.cars[index] = updatedCar;
      this.saveCars();
    }
  }

  deleteCar(id: number): void {
    this.cars = this.cars.filter(car => car.id !== id);
    this.saveCars();
  }

  deleteService(carId: number, serviceIndex: number): void {
    const car = this.getCarById(carId);
    if (car) {
      car.services.splice(serviceIndex, 1);
      this.saveCars();
    }
  }

  private saveCars(): void {
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }

  private loadCars(): Car[] | null {
    const carsData = localStorage.getItem('cars');
    return carsData ? JSON.parse(carsData) : null;
  }

  private initializeDefaultCars(): Car[] {
    return [
      {
        id: 1,
        name: 'Start Data Car A',
        model: 'Start Data Model A',
        services: []
      },
      {
        id: 2,
        name: 'Start Data Car B',
        model: 'Start Data Model B',
        services: [
          { part: 'Oil Change', cost: 100 },
          { part: 'Tire Replacement', cost: 400 }
        ]
      }
    ];
  }
}
