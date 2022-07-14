import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-allcards',
  templateUrl: './allcards.component.html',
  styleUrls: ['./allcards.component.css']
})
export class AllcardsComponent implements OnInit {
  name: string = 'Vaishanvi';
  desc: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae magnam illum, iure perferendis inventore sequi dolorum debitis sapiente. Consequuntur et earum laboriosam ex quam. Exercitationem quidem culpa provident. Fugit.'
  constructor(private ser:MyserviceService) {
    console.log("hello from cards constr");

  }

  names:any=['shubham','Sayali','Vaishanavi'];
  count:number=0;
  data:any[]=[];
  ngOnInit(): void {
    console.log("hello from cards init");

    this.ser.getAllData().subscribe(

      (res:any)=>{
        this.data=res;
        console.log(res)
      },
      (err)=>{
        console.log(err)

      }
    )
  }
  baher(){
    localStorage.removeItem('token');
    this.ser.redirect('/login');
  }
  countincre(){
    this.count=this.count+1;
  }
  countdecre(){
    this.count=this.count-1;
  }
  pr(){
    this.ser.print();
  }



}
