import { Component } from '@angular/core';
import { User } from './classes/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm: boolean = false;
  userSelected: User = new User();
  updateUser(user: User){
    this.showForm = true;
    this.userSelected = user;
  }
}
