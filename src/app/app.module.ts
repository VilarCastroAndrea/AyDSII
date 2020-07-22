import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NewPetComponent } from './module/new-pet/new-pet.component';
import { AdopcionComponent } from './module/adopcion/adopcion.component';
import { ProfileComponent } from './module/profile/profile.component';
import { HomeComponent } from './layout/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

import { HomeModule } from './layout/home/home.module';
import { LoginComponent } from './module/login/login.component';
import { TurnComponent } from './module/turn/turn.component';
import { PatientHistoryComponent } from './module/patient-history/patient-history.component';
import { CreatePublicationComponent } from './module/create-publication/create-publication.component';
import { QuestionsComponent } from './module/questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioManagementComponent } from './module/usuario-management/usuario-management.component';
import { PropietarioManagementComponent } from './module/propietario-management/propietario-management.component';
import { ListTurnoComponent } from './module/list-turno/list-turno.component'; 



import { LoginService } from './data/services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    NewPetComponent,
    AdopcionComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    TurnComponent,
    PatientHistoryComponent,
    CreatePublicationComponent,
    QuestionsComponent,
    UsuarioManagementComponent,
    PropietarioManagementComponent,
    ListTurnoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
