import { UserInterface } from './../interfaces/user';
export class User implements UserInterface{
  id: number;
  name: string;
  lastname: string;
  fiscalcode: string;
  email: string;
  phone: string;
  province: string;
  constructor(){
    this.id = 0;
    this.name = 'aaa';
    this.lastname = '';
    this.fiscalcode = '';
    this.email = '';
    this.phone = '';
    this.province = '';
  }
}
