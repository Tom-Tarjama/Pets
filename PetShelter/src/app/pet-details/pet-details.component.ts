import { Component, OnInit } from '@angular/core';

import {PetService} from '../pet.service';

import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

	private pet: any;
	private id: any;
	private messages: any =[];
  private check: boolean=true;

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

UpdateLikes(id: string){
	this.messages = null
	console.log("Updating One")
	this.pet.likes+=1
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
  	this.getOne(this.id)
    this.check = false;
  }

Adopt(id: string){
	//set messages to null initially
  	this.messages = null
  	console.log("Removing One")
	this._pet.removeOnePet(id, data=>{
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
		this._router.navigate(['/home']);
	});
}

}
