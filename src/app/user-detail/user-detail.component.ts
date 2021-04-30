import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }
  saveUser(){
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);

    } else{
      this.userService.createUser(this.user);
    }
  }
  resetForm(form){
    if(this.user.id === 0){
      this.user = new User();
    } else{
      form.reset();
    }
  }

}
