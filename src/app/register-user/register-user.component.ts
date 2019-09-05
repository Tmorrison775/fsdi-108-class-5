import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../services/data.service';
import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  model : User = new User();
  passRetype : string = '';
  passDontMatch: boolean = false;
  errorOnEmail: boolean = false;
  errorOnFirstName: boolean = false;
  errorOnLastName: boolean = false;


  constructor(private data : DataService) { }

  ngOnInit() {}
  isValidEmail(email:string) : boolean{
    if (!email) return false; //its empty
    if(email.includes("@") && email.includes(".")){
      return true;//its a valid one
    }
    return false;
  }
  saveUser(){
    //todo: Compare both passwords
    if(this.model.password != this.passRetype){
      //passwords don't match
      this.passDontMatch = true;
    }
    else if(!this.isValidEmail(this.model.email)){
      this.errorOnEmail = true;
    }
    else if(!this.model.firstName ){
      this.errorOnFirstName = true;
    }
    else if(!this.model.lastName){
      this.errorOnLastName = true;
    }
    else{
   //reset error messages
   this.passDontMatch = false;
   this.errorOnEmail = false;
   this.errorOnFirstName = false;
   this.errorOnLastName = false;


   //save the model
   this.data.addUser(this.model);
   //clear the form so user can create more
   this.model = new User();
   this.passRetype = "";
   console.log(this.data.getAllUsers());
    }
  }
}