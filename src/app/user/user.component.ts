import { UserService } from './../users/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({

  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // decoratore Input serve per dichiarare una variabile dalla quale prendere valori
  // 'user-data' alias della variabile user
  @Input('user-data') user
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.userService.deleteUser(this.user);
  }

}
