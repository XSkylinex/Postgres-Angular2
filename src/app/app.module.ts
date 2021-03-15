import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { LoginComponent } from './shared/login/login.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { FindCarComponent } from './cars/find-car/find-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';
import { ReplaceCarComponent } from './cars/replace-car/replace-car.component';
import { UpdateUserComponent } from './user/update-user/update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    AddCarComponent,
    FindCarComponent,
    DeleteCarComponent,
    ReplaceCarComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
