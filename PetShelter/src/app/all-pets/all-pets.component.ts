import { Component, OnInit } from '@angular/core';

import { PetService } from '../pet.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {

	private pets: any;

  constructor(private _pet: PetService) { }

  ngOnInit() {

  this.getAll();	
  }

getAll(){
	console.log("Getting All")
	this._pet.getAllPets(data=>{
		this.pets = data.data
		console.log("DATA", this.pets)
	});
}
}
