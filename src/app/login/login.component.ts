import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email : string = "";
  password : string = "";
  errorOnEmail : boolean = false;
  errorOnPassword : boolean = false;
  invalidCreds: boolean = false;

  constructor(
    private data : DataService,
     private shared : SharedService,
     private router : Router) {}

  ngOnInit() {
  }



  /**Validate email and password among the users on the data service   */
  validateCreds(){
    var allUsers = this.data.getAllUsers();
    var correctCreds = false;
    this.errorOnEmail = false;
    this.errorOnPassword = false;

    //compare email and password with all users on the array.
    //if they match any objects in the array, then allow the user to log in.
    for(let i=0;i<allUsers.length; i++){
      let user = allUsers[i];
      if(user.email == this.email && user.password == this.password){
        console.log('You can login');
        correctCreds = true;
        this.invalidCreds = false;
        
        //set user on shared service
        this.shared.setLoggedIn(true);
        this.shared.setLoggedUser(user);

        //show another page
        this.router.navigate(['user/register']);

      }
    }
    
 
    if(!correctCreds){
      this.invalidCreds = true;
    console.log('invalid credentials, try again');
    }

  }
  

}
