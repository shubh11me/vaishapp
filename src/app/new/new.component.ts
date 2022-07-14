import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private myser:MyserviceService) { }
  studForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    age: new FormControl(),
    city: new FormControl(),
  })

  dataObj:any={};
  ngOnInit(): void {
    this.myser.print();
  }
  onSubmit(){
   this.dataObj.sname=this.studForm.value.name;
   this.dataObj.sage=this.studForm.value.age;
   this.dataObj.scity=this.studForm.value.city;
this.myser.submitData(this.dataObj);
  }
}
