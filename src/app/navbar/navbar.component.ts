import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : boolean = false;

  constructor(private shared : SharedService) {
  this.isLoggedIn = this.shared.isLogged();
   }

  ngOnInit() {
  }
  getLoggedState(){
    return this.shared.isLogged();
  }



}
