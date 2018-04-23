webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-pet/add-pet.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.wrapper{\r\n\tpadding:30px;\r\n}\r\n\r\n.jumbotron{\r\n\tmargin-bottom: 0px;\r\n\tpadding: 30px 10px 30px 10px;\r\n}\r\n\r\ntd{\r\n\tmargin: 5px;\r\n}\r\n\r\n.messages{\r\n\tcolor: purple;\r\n\ttext-indent: 20px;\r\n}\r\n\r\n.form-control{\r\n\twidth: 400px;\r\n}\r\n\r\nbutton{\r\n\tmargin: 10px;\r\n}\r\n\r\n.form-group{\r\n\twidth: 500px;\r\n\tborder: 1px solid grey;\r\n\tborder-radius: 5px;\r\n\tpadding: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-pet/add-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= wrapper>\n\t\n\t<div class=\"jumbotron\">\n\t\t<h1 class=\"display-4\">Pet Shelter</h1>\n\t\t<h4 class=\"lead\">Know a pet in need of a home?</h4>\n\t\t<br>\n\t\t\t<div class = \"messages\" *ngIf= \"!nameValidation.valid || nameValidation.pristine\">\n\t\t\t\t<p> -Your pet name must be at least 3 characters</p>\n\t\t</div>\n\t\t<div class = \"messages\" *ngIf= \"!typeValidation.valid || typeValidation.pristine\">\n\t\t\t\t<p> -Your pet type must be at least 3 characters</p>\n\t\t</div>\n\t\t<div class = \"messages\" *ngIf= \"!descValidation.valid || descValidation.pristine\">\n\t\t\t\t<p> -Your pet description must be at least 3 characters</p>\n\t\t</div>\n\t\t<div class = \"messages\" *ngIf= \"messages ==='Error: A pet of that name already exists'\">\n\t\t\t\t<p> -A pet of that name already exists</p>\n\t\t</div>\n\t</div>\n\t<br>\n\t\t<form (submit)=\"addOne()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr><td>Pet Name:</td></tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPet.name\" name=\"name\" require minlength=\"3\" #nameValidation=\"ngModel\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr><td>Pet Type:</td></tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPet.type\" name=\"type\" require minlength=\"3\" #typeValidation=\"ngModel\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr><td>Description:</td></tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"newPet.description\" name=\"description\" require minlength=\"3\" #descValidation=\"ngModel\"></textarea></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr><td>Skills</td></tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Skill 1:<input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPet.skill_1\" name=\"skill_1\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Skill 2:<input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPet.skill_2\" name=\"skill_2\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Skill 3:<input class=\"form-control\" type=\"text\" [(ngModel)]=\"newPet.skill_3\" name=\"skill_3\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input class=\"btn btn-primary\" type=\"submit\" value=\"Add Pet\"><button class=\"btn btn-secondary\" [routerLink]=\"['/home']\">Cancel</button></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-pet/add-pet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AddPetComponent = /** @class */ (function () {
    function AddPetComponent(_pet, _route, _router) {
        this._pet = _pet;
        this._route = _route;
        this._router = _router;
        this.messages = [];
    }
    AddPetComponent.prototype.ngOnInit = function () {
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
    };
    AddPetComponent.prototype.addOne = function () {
        var _this = this;
        //set messages to null initially
        this.messages = null;
        console.log("Adding one pet");
        this._pet.addPet(this.newPet, function (data) {
            //Saving error messages from back end
            if (data.message === "Error") {
                _this.messages = data.errors;
                console.log("MESSAGES", _this.messages);
            }
            else if (data.message === "Error: A pet of that name already exists") {
                _this.messages = data.message;
                console.log("MESSAGES", _this.messages);
            }
            else if (data.message !== "Error") {
                _this.messages = null;
                _this._router.navigate(['/home']);
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
    };
    AddPetComponent = __decorate([
        core_1.Component({
            selector: 'app-add-pet',
            template: __webpack_require__("./src/app/add-pet/add-pet.component.html"),
            styles: [__webpack_require__("./src/app/add-pet/add-pet.component.css")]
        }),
        __metadata("design:paramtypes", [pet_service_1.PetService, router_1.ActivatedRoute, router_1.Router])
    ], AddPetComponent);
    return AddPetComponent;
}());
exports.AddPetComponent = AddPetComponent;


/***/ }),

/***/ "./src/app/all-pets/all-pets.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ntable, th, td{\r\n\tborder: 1px solid black;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\ntd, th{\r\n\tpadding: 3px;\r\n\twidth: 100px;\r\n\theight: 50px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n\r\n.btn-link{\r\n\t-webkit-text-decoration-line: underline;\r\n\t        text-decoration-line: underline;\r\n}\r\n\r\n\r\n.btn-primary{\r\n\tmargin: 5px;\r\n\twidth:100px;\r\n}\r\n\r\n\r\n.btn-secondary{\r\n\tmargin: 5px;\r\n\twidth:100px;\r\n}\r\n\r\n\r\n.wrapper{\r\n\tpadding:30px;\r\n}\r\n\r\n\r\n.table_header{\r\n\tbackground-color: grey; \r\n\tcolor: white; \r\n\tborder: 1px solid black;\r\n\tvertical-align: middle;\r\n}\r\n\r\n\r\n.jumbotron{\r\n\tmargin-bottom: 0px;\r\n\tpadding: 30px 10px 30px 10px;\r\n}"

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"jumbotron\">\n\t\t<h1 class=\"display-4\">Pet Shelter</h1>\n\t\t<h4 class=\"lead\">These pets are looking for a home!</h4>\n\t\t<br>\n\t\t<a class=\"btn btn-link\" [routerLink]=\"['/add_pet']\">Add a pet to the shelter</a>\n\t</div>\n\t<div *ngIf=\"pets\">\n\t\t<table class=\"table table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\" class= \"table_header col-md-4\">Name</th>\n\t\t\t\t\t<th scope=\"col\" class= \"table_header col-md-4\">Type</th>\n\t\t\t\t\t<th scope=\"col\" class= \"table_header col-md-4\">Actions</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let pet of pets\">\n\t\t\t\t\t<td>{{pet.name}}</td>\n\t\t\t\t\t<td>{{pet.type}}</td>\n\t\t\t\t\t<td><button class=\"btn btn-primary\" [routerLink]=\"['/details/'+pet._id]\">Details</button> <button class=\"btn btn-secondary\" [routerLink]=\"['/edit/'+pet._id]\">Edit</button></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/all-pets/all-pets.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var AllPetsComponent = /** @class */ (function () {
    function AllPetsComponent(_pet) {
        this._pet = _pet;
    }
    AllPetsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    AllPetsComponent.prototype.getAll = function () {
        var _this = this;
        console.log("Getting All");
        this._pet.getAllPets(function (data) {
            _this.pets = data.data;
            console.log("DATA", _this.pets);
        });
    };
    AllPetsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-pets',
            template: __webpack_require__("./src/app/all-pets/all-pets.component.html"),
            styles: [__webpack_require__("./src/app/all-pets/all-pets.component.css")]
        }),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], AllPetsComponent);
    return AllPetsComponent;
}());
exports.AllPetsComponent = AllPetsComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var all_pets_component_1 = __webpack_require__("./src/app/all-pets/all-pets.component.ts");
var add_pet_component_1 = __webpack_require__("./src/app/add-pet/add-pet.component.ts");
var pet_details_component_1 = __webpack_require__("./src/app/pet-details/pet-details.component.ts");
var edit_pet_component_1 = __webpack_require__("./src/app/edit-pet/edit-pet.component.ts");
var routes = [
    { path: 'add_pet', component: add_pet_component_1.AddPetComponent },
    { path: 'home', component: all_pets_component_1.AllPetsComponent },
    { path: 'details/:id', component: pet_details_component_1.PetDetailsComponent },
    { path: 'edit/:id', component: edit_pet_component_1.EditPetComponent },
    { path: '', pathMatch: 'full', redirectTo: "home" },
    { path: '**', redirectTo: "home" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".blue{\r\nbackground-color: blue;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-all-pets></app-all-pets> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_pet) {
        this._pet = _pet;
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var all_pets_component_1 = __webpack_require__("./src/app/all-pets/all-pets.component.ts");
var add_pet_component_1 = __webpack_require__("./src/app/add-pet/add-pet.component.ts");
var pet_details_component_1 = __webpack_require__("./src/app/pet-details/pet-details.component.ts");
var edit_pet_component_1 = __webpack_require__("./src/app/edit-pet/edit-pet.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                all_pets_component_1.AllPetsComponent,
                add_pet_component_1.AddPetComponent,
                pet_details_component_1.PetDetailsComponent,
                edit_pet_component_1.EditPetComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [pet_service_1.PetService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.wrapper{\r\n\tpadding:30px;\r\n}\r\n\r\n.jumbotron{\r\n\tmargin-bottom: 0px;\r\n\tpadding: 30px 10px 30px 10px;\r\n}\r\n\r\n.header{\r\n\twidth: 500px;\r\n}\r\n\r\n#header_1{\r\n\tdisplay: inline-block;\r\n}\r\n\r\n#header_2{\r\n\tdisplay: inline-block;\r\n\t-webkit-text-decoration-line: underline;\r\n\t        text-decoration-line: underline;\r\n\tfloat: right;\r\n\tpadding: 0px;\r\n\tmargin-bottom: .5rem;\r\n}\r\n\r\n.messages{\r\n\tcolor: purple;\r\n\ttext-indent: 20px;\r\n}\r\n\r\n.form-control{\r\n\twidth: 400px;\r\n}\r\n\r\nbutton{\r\n\tmargin: 10px;\r\n}\r\n\r\n.form-group{\r\n\twidth: 500px;\r\n\tborder: 1px solid grey;\r\n\tborder-radius: 5px;\r\n\tmargin-top: 30px;\r\n\tpadding: 30px;\r\n}"

/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"jumbotron\">\n\t\t<h1 class=\"display-4\">Pet Shelter</h1>\n\t</div>\n\t<br>\n\t<div class=\"header\">\n\t\t<h4 id=\"header_1\" class=\"lead\">Edit pet's profile</h4>\n\t\t<a id=\"header_2\" class=\"btn btn-link\" [routerLink]=\"['/home']\">Home</a>\n\t</div>\n\n\t<div class = \"messages\" *ngIf= \"!nameValidation.valid\">\n\t\t\t<p> -Your pet name must be at least 3 characters</p>\n\t</div>\n\t<div class = \"messages\" *ngIf= \"!typeValidation.valid\">\n\t\t\t<p> -Your pet type must be at least 3 characters</p>\n\t</div>\n\t<div class = \"messages\" *ngIf= \"!descValidation.valid\">\n\t\t\t<p> -Your pet description must be at least 3 characters</p>\n\t</div>\n\t\t<form (submit) =\"UpdatePet(pet._id)\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<tr><td>Pet Name:</td></tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.name\" name=\"name\" require minlength=\"3\" #nameValidation=\"ngModel\"></td>\n\t\t\t\t</tr>\n\t\t\t\t<br>\n\t\t\t\t<tr><td>Pet Type:</td></tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.type\" name=\"type\" require minlength=\"3\" #typeValidation=\"ngModel\"></td>\n\t\t\t\t</tr>\n\t\t\t\t<br>\n\t\t\t\t<tr><td>Description:</td></tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><textarea class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.description\" name=\"description\" require minlength=\"3\" #descValidation=\"ngModel\"></textarea></td>\n\t\t\t\t</tr>\n\t\t\t\t<br>\n\t\t\t\t<tr><td>Skills</td></tr>\n\t\t\t\t<br>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Skill 1:<input class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.skill_1\" name=\"skill_1\"></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Skill 2:<input class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.skill_2\" name=\"skill_2\"></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Skill 3:<input class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.skill_3\" name=\"skill_3\"></td>\n\t\t\t\t</tr>\n\t\t\t\t<br>\n\t\t\t\t<tr>\n\t\t\t\t\t<input class=\"btn btn-primary\" type=\"submit\" value=\"Edit Pet Profile\">\n\t\t\t\t\t<button class=\"btn btn-secondary\" [routerLink]=\"['/home']\">Cancel</button>\n\t\t\t\t</tr>\n\t\t\t</div>\n\t\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditPetComponent = /** @class */ (function () {
    function EditPetComponent(_pet, _route, _router) {
        this._pet = _pet;
        this._route = _route;
        this._router = _router;
        this.messages = [];
    }
    EditPetComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this._route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.getOne(this.id);
    };
    EditPetComponent.prototype.getOne = function (id) {
        var _this = this;
        //set messages to null initially
        this.messages = null;
        console.log("ID", id);
        this._pet.getOnePet(id, function (data) {
            //Saving error messages from back end
            if (data.message === "Error") {
                _this.messages = data.errors;
                console.log("MESSAGES", _this.messages);
            }
            else if (data.message !== "Error") {
                _this.messages = null;
            }
            _this.pet = data['data'];
        });
    };
    EditPetComponent.prototype.UpdatePet = function (id) {
        var _this = this;
        this.messages = null;
        console.log("Updating One");
        this._pet.updateOnePet(this.pet, id, function (data) {
            //Saving error messages from back end
            if (data.message === "Error") {
                _this.messages = data.errors;
                console.log("MESSAGES", _this.messages);
            }
            else if (data.message !== "Error") {
                _this.messages = null;
            }
            console.log(data);
        });
        this._router.navigate(['/details/' + this.pet._id]);
    };
    EditPetComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-pet',
            template: __webpack_require__("./src/app/edit-pet/edit-pet.component.html"),
            styles: [__webpack_require__("./src/app/edit-pet/edit-pet.component.css")]
        }),
        __metadata("design:paramtypes", [pet_service_1.PetService, router_1.ActivatedRoute, router_1.Router])
    ], EditPetComponent);
    return EditPetComponent;
}());
exports.EditPetComponent = EditPetComponent;


/***/ }),

/***/ "./src/app/pet-details/pet-details.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n\tpadding:30px;\r\n}\r\n\r\n.header{\r\n\twidth: 500px;\r\n}\r\n\r\n#header_1{\r\n\tdisplay: inline-block;\r\n}\r\n\r\n#header_2{\r\n\tdisplay: inline-block;\r\n\tfloat: right;\r\n\tpadding: 0px;\r\n\tmargin-bottom: .5rem;\r\n\t-webkit-text-decoration-line: underline;\r\n\t        text-decoration-line: underline;\r\n}\r\n\r\n.rounded{\r\n\twidth: 500px;\r\n\tborder: 1px solid grey;\r\n\tborder-radius: 5px;\r\n\tpadding: 30px;\r\n}\r\n\r\n.jumbotron{\r\n\tmargin-bottom: 0px;\r\n\tpadding: 30px 10px 30px 10px;\r\n}\r\n\r\n.buttons{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n\r\n.btn-primary{\r\n\tmargin: 5px;\r\n\twidth:100px;\r\n}\r\n\r\n.btn-success{\r\n\tmargin: 5px;\r\n\twidth:150px;\r\n}\r\n\r\n.btn-dark{\r\n\tmargin: 5px;\r\n\twidth:150px;\r\n}"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"jumbotron\">\n\t\t<h1 class=\"display-4\">Pet Shelter</h1>\n\t</div>\n\t<br>\n\t<div class=\"header\">\n\t\t<h4 id=\"header_1\" class=\"lead\">Details about {{pet.name}}</h4>\n\t\t<a id=\"header_2\" class=\"btn btn-link\" [routerLink]=\"['/home']\">Home</a>\n\t</div>\n\t<br>\n\t<div class=\"rounded\">\n\t\t<h4 class=\"lead\">Pet type: {{pet.type}}</h4>\n\t\t<br>\n\t\t<h4 class=\"lead\">Description: {{pet.description}}</h4>\n\t\t<br>\n\t\t<div *ngIf=\"pet.skill_1 || pet.skill_2 || pet.skill_3\"><h4 class=\"lead\" >Skills:</h4></div>\n\t\t<div class=\"lead\" *ngIf=\"pet.skill_1\"><p>- {{pet.skill_1}}</p></div>\n\t\t<div class=\"lead\" *ngIf=\"pet.skill_2\"><p>- {{pet.skill_2}}</p></div>\n\t\t<div class=\"lead\" *ngIf=\"pet.skill_3\"><p>- {{pet.skill_3}}</p></div>\n\t\t<h4 class=\"lead\">Likes: {{pet.likes}}</h4>\n\t\t<br>\n\t\t<div class=\"buttons\">\n\t\t\t<div *ngIf=\"check\">\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"UpdateLikes(pet._id)\">Like</button>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-success\" (click)=\"Adopt(pet._id)\">Adopt this Pet!</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var PetDetailsComponent = /** @class */ (function () {
    function PetDetailsComponent(_pet, _route, _router) {
        this._pet = _pet;
        this._route = _route;
        this._router = _router;
        this.messages = [];
        this.check = true;
    }
    PetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this._route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.getOne(this.id);
    };
    PetDetailsComponent.prototype.getOne = function (id) {
        var _this = this;
        //set messages to null initially
        this.messages = null;
        console.log("ID", id);
        this._pet.getOnePet(id, function (data) {
            //Saving error messages from back end
            if (data.message === "Error") {
                _this.messages = data.errors;
                console.log("MESSAGES", _this.messages);
            }
            else if (data.message !== "Error") {
                _this.messages = null;
            }
            _this.pet = data['data'];
        });
    };
    PetDetailsComponent.prototype.UpdateLikes = function (id) {
        var _this = this;
        this.messages = null;
        console.log("Updating One");
        this.pet.likes += 1;
        this._pet.updateOnePet(this.pet, id, function (data) {
            //Saving error messages from back end
            if (data.message === "Error") {
                _this.messages = data.errors;
                console.log("MESSAGES", _this.messages);
            }
            else if (data.message !== "Error") {
                _this.messages = null;
            }
            console.log(data);
        });
        this.getOne(this.id);
        this.check = false;
    };
    PetDetailsComponent.prototype.Adopt = function (id) {
        var _this = this;
        //set messages to null initially
        this.messages = null;
        console.log("Removing One");
        this._pet.removeOnePet(id, function (data) {
            //Saving error messages from back end
            if (data.message === "Error") {
                _this.messages = data.errors;
                console.log("MESSAGES", _this.messages);
            }
            else if (data.message !== "Error") {
                _this.messages = null;
            }
            _this.pet = data['data'];
            _this._router.navigate(['/home']);
        });
    };
    PetDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-details',
            template: __webpack_require__("./src/app/pet-details/pet-details.component.html"),
            styles: [__webpack_require__("./src/app/pet-details/pet-details.component.css")]
        }),
        __metadata("design:paramtypes", [pet_service_1.PetService, router_1.ActivatedRoute, router_1.Router])
    ], PetDetailsComponent);
    return PetDetailsComponent;
}());
exports.PetDetailsComponent = PetDetailsComponent;


/***/ }),

/***/ "./src/app/pet.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var PetService = /** @class */ (function () {
    function PetService(_http) {
        this._http = _http;
    }
    PetService.prototype.getAllPets = function (cb) {
        this._http.get('/api/pets')
            .subscribe(function (data) { return cb(data); });
    };
    PetService.prototype.addPet = function (pet, cb) {
        // console.log("TEST", pet)
        this._http.post("/api/pets/new", pet)
            .subscribe(function (data) { return cb(data); });
    };
    PetService.prototype.getOnePet = function (id, cb) {
        this._http.get("/api/pets/" + id)
            .subscribe(function (data) { return cb(data); });
    };
    PetService.prototype.updateOnePet = function (pet, id, cb) {
        this._http.put("/api/pets/" + id, pet)
            .subscribe(function (data) { return cb(data); });
    };
    PetService.prototype.removeOnePet = function (id, cb) {
        this._http.delete("/api/pets/" + id)
            .subscribe(function (data) { return cb(data); });
    };
    PetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PetService);
    return PetService;
}());
exports.PetService = PetService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map