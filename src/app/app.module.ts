import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GestureComponent } from './gesture/gesture.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { routes } from './app.routes';  // Import routes from app.routes.ts
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ProfilesService } from './profile-details/profile-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestureComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    CommonModule,
    NgbCarouselModule// Register RouterModule and pass routes
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }