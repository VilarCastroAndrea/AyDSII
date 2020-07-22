import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
// import { ProfileComponent } from './module/profile/profile.component';
// // import { SignupComponent } from './signup/signup.component';
// import { LandingComponent } from './module/landing/landing.component';
// import { SignupComponent } from './module/signup/signup.component';

import { LoginComponent } from './module/login/login.component';
import { TurnComponent } from './module/turn/turn.component';
import { AdopcionComponent } from './module/adopcion/adopcion.component';
import { ProfileComponent } from './module/profile/profile.component';
import { PatientHistoryComponent } from './module/patient-history/patient-history.component';
import { NewPetComponent } from './module/new-pet/new-pet.component';
import { PropietarioManagementComponent } from './module/propietario-management/propietario-management.component';
import { UsuarioManagementComponent } from './module/usuario-management/usuario-management.component';




const routes: Routes = [
  // { path: 'register',           component: SignupComponent },
  // { path: 'landing',          component: LandingComponent },
  // { path: 'solicitarTurno',          component: SignupComponent },
    { path: 'home',             component: HomeComponent },
    { path: 'profile/:id',     component: ProfileComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'turn',          component: TurnComponent },
    { path: 'pruebas',          component: ProfileComponent },
    { path: 'patient-history',          component: PatientHistoryComponent },
    { path: 'new-pet',          component: NewPetComponent },
    { path: 'usuario-management',          component: UsuarioManagementComponent },
    { path: 'propietario-management',          component: PropietarioManagementComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
