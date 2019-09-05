import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  
  // list of users to display
  allUsers: User[] = [];


 
  constructor(private data: DataService) {
    //put the users from the service into the local array
    this.allUsers = data.getAllUsers(); 
   }



}
