//require express:
var express = require("express");

// create the express app:
var app = express();

// path module -- try to figure out where and why we use this
var path = require("path");

//require bodyParser (to receve post data from clients)
var bodyParser = require('body-parser');

//integrate body-parser into our app:
app.use(bodyParser.json());

//COMMENT ME OUT, THEN CHANGE ME: setting up static route for angular
app.use(express.static( __dirname + '/PetShelter/dist' ));

//-----DB stuff

var mongoose = require('mongoose');

//CHANGE ME: Connecting Mongoose to DB 
mongoose.connect('mongodb://localhost/Pet_Shelter');

//Models
var Schema = mongoose.Schema;

//Start of single model
var PetSchema = new mongoose.Schema({
	name: {type:String, required: true, minlength:3, maxlength:255}, 
	type: {type:String, required: true, minlength:3, maxlength:255},
	description: {type:String, required: true, minlength:3, maxlength:255},
	likes: {type:Number, default: 0},
	skill_1: {type:String, maxlength:255},
	skill_2: {type:String, maxlength:255},
	skill_3: {type:String, maxlength:255},
	},{ timestamps: true });

mongoose.model("Pet", PetSchema);

var Pet = mongoose.model('Pet');

//End of single model

//----- routing stuff

//get all pets
app.get("/api/pets", function(req, res){
	Pet.find({}).sort({type: 1})
	.exec(function(err, pets){
		if(err){
			console.log("Error locating data:", err)
			res.json({message: "Error", errors: err})
		}
		else{
			console.log("Pets located successfully")
			res.json({message: "Success", data: pets})

		}
	})
})

//create one new pet
app.post("/api/pets/new", function(req, res){
	//New:
	Pet.find({name: req.body.name}, function(err, pet){
		if(pet.length>0){
			console.log("A pet of that name already exists")
			console.log(pet)
			res.json({message: "Error: A pet of that name already exists"})
		}
		else{
			req.body.type = req.body.type.toLowerCase()
			let pet = new Pet(req.body)
			pet.save(function(err, pet){
			if(err){
				console.log("Error creating new pet", err)
				res.json({message: "Error", errors: err})
			}
			else{
				console.log("Pet created successfully")
				res.json({message: "Success", data: pet})
			}
			})
		}
	})
})

//get one pet
app.get("/api/pets/:id", function(req, res){
	Pet.findOne({_id: req.params.id}, function(err, pet){
		if(err || pet ===null){
			console.log("Error locating that pet:", err)
			res.json({message: "Error", errors: err})
		}
		else{
			console.log("Pet located successfully")
			res.json({message: "Success", data: pet})
		}
	})
})

//update one pet
app.put("/api/pets/:id", function(req, res){
	Pet.findOne({_id: req.params.id}, function(err, pet){
		if(err || pet ===null){
			console.log("Error locating that pet:", err)
			res.json({message: "Error", errors: err})
		}
		else{
			console.log("Pet located successfully")
			//The || pipes say: If req.body.title is not filled in, use existing task.title
			pet.name = req.body.name || pet.name;
			pet.type = req.body.type.toLowerCase() || pet.type;
			pet.description = req.body.description || pet.description;
			pet.likes = req.body.likes || pet.likes;
			pet.skill_1 = req.body.skill_1 || pet.skill_1;
			pet.skill_2 = req.body.skill_2 || pet.skill_2;
			pet.skill_3 = req.body.skill_3 || pet.skill_3;
			pet.save(function(err){
				if(err){
					console.log("Error updating  pet", err)
					res.json({message: "Error", errors: err})
				}
				else{
					console.log("Pet updated successfully")
					res.json({message: "Success", data: pet})
				}
			})
			
		}
	})
})

//remove one pet
app.delete("/api/pets/:id", function(req,res){
	Pet.findOne({_id: req.params.id}, function(err, pet){
		if(err || pet ===null){
			console.log("Error locating that pet:", err)
			res.json({message: "Error", errors: err})
		}
		else{
			Pet.remove({_id: req.params.id}, function(err){
				if(err){
					console.log("Error removing this pet")
					res.json({message: "Error", errors: err})
				}
				else{
					console.log("Pet removed successfully")
					res.json({message: "Success", data: pet})
				}
			})
		}
	})
})

// catch-all route (comment out until angular routes are running):
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./PetShelter/dist/index.html"))
});

//----- setting port
app.listen(8000, function() {
 console.log("listening on port 8000");
});

