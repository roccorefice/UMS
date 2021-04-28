import { UserService } from '../services/user.service';
import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';






@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
    tableTitle = "Users";
    users = [];
    @Output() updateUser = new EventEmitter<User>();
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
    onSelectUser(user){
      this.updateUser.emit(user);
      // alert(user.lastname);
    }
}
