import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GestureComponent } from './gesture/gesture.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route to HomeComponent
    { path: 'gesture', component: GestureComponent },  // Route to GestureComponent
    { path: 'profile-details/:id', component: ProfileDetailsComponent },  // Dynamic route for ProfileDetailsComponent
  ];
