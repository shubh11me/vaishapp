import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vaishapp';
games=['Cricket','KhoKho','BAdminton','vitudandu'];
  show:boolean=true;
disableWrite:boolean=true;
new_id="msg_id";

  toggle(){
    // this.show=!this.show;
    this.new_id="MyIdToggle"
    this.disableWrite=!this.disableWrite;
  }
}
