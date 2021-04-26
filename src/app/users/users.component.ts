import { UserService } from './user.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
    tableTitle = "Users";
    users = [];
    constructor(private service: UserService){
      // il constructor in questo modo si occupa di inizializzare il componente e il service
    }
    ngOnInit(){
      this.users = this.service.getUsers();
    }
    onDeleteUser(user){
      this.service.deleteUser(user);
      // alert(user.lastname);
    }
}
