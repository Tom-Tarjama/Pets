import { Component, OnInit } from '@angular/core';

import {PetService} from '../pet.service';

import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

	private pet: any;
	private id: any;
	private messages: any =[];

  constructor(private _pet: PetService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

  	this.pet = {
  		name: "",
  		type: "",
  		description: "",
  		likes: 0,
  		skill_1: "",
  		skill_2: "",
  		skill_3: "",
  		id: ""
  	};

  	this._route.params.subscribe((params: Params) => this.id = params['id']);


  	this.getOne(this.id)
  }


getOne(id: string){
  	//set messages to null initially
  	this.messages = null
	console.log("ID", id)
	this._pet.getOnePet(id, data=>{
		//Saving error messages from back end
  		if (data.message === "Error"){
  			this.messages = data.errors
  			console.log("MESSAGES", this.messages)
  		}
  		//If no error messages, setting this.messages to null
  		else if (data.message !== "Error"){
  			this.messages = null
  		}
		this.pet = data['data']
	});
  }

UpdatePet(id: string){
	this.messages = null
	console.log("Updating One")
	this._pet.updateOnePet(this.pet, id, (data)=>{
  	//Saving error messages from back end
  	if (data.message === "Error"){
  		this.messages = data.errors
  		console.log("MESSAGES", this.messages)
  	}
  	//If no error messages, setting this.messages to null
  	else if (data.message !== "Error"){
  		this.messages = null
  	}
  	console.log(data)
  	});
  	this._router.navigate(['/details/'+this.pet._id]);
  }

}
