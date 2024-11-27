import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

export const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'car-details', component: CarDetailsComponent },
];
