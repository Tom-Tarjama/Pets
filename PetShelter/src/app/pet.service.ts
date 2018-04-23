import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class PetService {

  constructor(private _http:HttpClient) { }

 getAllPets(cb){
 	this._http.get('/api/pets')
 	.subscribe(data=>cb(data));
 }

 addPet(pet,cb){
 	// console.log("TEST", pet)
 	this._http.post("/api/pets/new", pet)
 	.subscribe(data=>cb(data));
 }

 getOnePet(id,cb){
 	this._http.get("/api/pets/"+id)
 	.subscribe(data=>cb(data));
 }

 updateOnePet(pet, id, cb){
 	this._http.put("/api/pets/"+id, pet)
 	.subscribe(data=>cb(data));
 }

 removeOnePet(id, cb){
 	this._http.delete("/api/pets/"+id)
 	.subscribe(data=>cb(data));
 }
}


