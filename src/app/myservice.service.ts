import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  print(){
    console.log("hey guys");
  }

redirect(place:string){
this.router.navigate([place]);
}

  constructor(private router:Router) { }
}
