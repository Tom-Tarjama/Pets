import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ AllPetsComponent} from './all-pets/all-pets.component';
import{ AddPetComponent} from './add-pet/add-pet.component';
import{ PetDetailsComponent } from './pet-details/pet-details.component';
import{ EditPetComponent } from './edit-pet/edit-pet.component';


const routes: Routes = [
{path: 'add_pet', component: AddPetComponent},
{path: 'home', component: AllPetsComponent},
{path: 'details/:id', component: PetDetailsComponent},
{path: 'edit/:id', component: EditPetComponent},
{path: '', pathMatch: 'full', redirectTo: "home"},
{path: '**', redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
