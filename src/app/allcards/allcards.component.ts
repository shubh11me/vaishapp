import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcards',
  templateUrl: './allcards.component.html',
  styleUrls: ['./allcards.component.css']
})
export class AllcardsComponent implements OnInit {
  name: string = 'Vaishanvi';
  desc: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae magnam illum, iure perferendis inventore sequi dolorum debitis sapiente. Consequuntur et earum laboriosam ex quam. Exercitationem quidem culpa provident. Fugit.'
  constructor() {
    console.log("hello from cards constr");

  }
count:number=0;
  ngOnInit(): void {
    console.log("hello from cards init");
  }

  countincre(){
    this.count=this.count+1;
  }
  countdecre(){
    this.count=this.count-1;
  }
}
