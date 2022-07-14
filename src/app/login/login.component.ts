import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ser:MyserviceService) { }
  login(){
    localStorage.setItem('token','cascaclnasnfaowijoawmmkvdlvsdvsdv');
    this.ser.redirect('/');
  }
  ngOnInit(): void {
  }

}
