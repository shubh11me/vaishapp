import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  print() {
    console.log("hey guys");
  }

  redirect(place: string) {
    this.router.navigate([place]);
  }

  constructor(private router: Router, private http: HttpClient) { }

getAllData(){
  return this.http.get('http://localhost/PracticeProjects/phpRestAPI/api-fetch-all.php');
}



  submitData(data: any) {
    this.http.post('http://localhost/PracticeProjects/phpRestAPI/api-insert.php', data).subscribe(

    (result)=>{
console.log('success');
console.log(result)
    },
    (err)=>{
      console.log(err);

    }
    )
  }
}
