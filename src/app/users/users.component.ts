import { UserService } from './user.service';
import { Component } from "@angular/core";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
    tableTitle = "Users";
    users = [];
    constructor(service: UserService){
      this.users = service.getUsers();
    }
}
