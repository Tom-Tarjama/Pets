import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PetService } from './pet.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';


@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    AddPetComponent,
    PetDetailsComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
