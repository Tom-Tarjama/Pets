import { Component, OnInit } from '@angular/core';

import { PetService } from '../pet.service';

import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

	private newPet: any;
	private messages: any =[];



  constructor(private _pet:PetService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

  	this.newPet = {
  		name: "",
  		type: "",
  		description: "",
  		likes: 0,
  		skill_1: "",
  		skill_2: "",
  		skill_3: "",
  		id: ""
  	};
  }

    addOne(){
  	//set messages to null initially
  	this.messages = null
  	console.log("Adding one pet")
  	this._pet.addPet(this.newPet, (data)=>{
  		//Saving error messages from back end
  		if (data.message === "Error"){
  			this.messages = data.errors
  			console.log("MESSAGES", this.messages)
  		}
      else if(data.message === "Error: A pet of that name already exists"){
        this.messages = data.message
        console.log("MESSAGES", this.messages)
      }
  		//If no error messages, setting this.messages to null
  		else if (data.message !== "Error"){
  			this.messages = null
  			this._router.navigate(['/home']);
  		}
  	});
  	//reseting newTask
  	this.newPet = {
  		name: "",
  		type: "",
  		description: "",
  		likes: 0,
  		skill_1: "",
  		skill_2: "",
  		skill_3: "",
  		id: ""
  	};
  	
    }
}
