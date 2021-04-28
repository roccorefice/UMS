import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';



@Injectable()

export class UserService{
  users: User[] = [
    {
      name: 'Mario',
      lastname: 'Rossi',
      fiscalcode: 'MRS999MRS',
      email: 'mrossi@mail.it',
      phone: '3339988777',
      province: 'MI'
    },
    {
      name: 'Ciccio',
      lastname: 'Pasticcio',
      fiscalcode: 'CPC88CPC',
      email: 'ciccio@mail.it',
      phone: '223366558',
      province: 'NA'
    },
    {
      name: 'Fabio',
      lastname: 'Bianchi',
      fiscalcode: 'FBC456BNC',
      email: 'fbianchi@mail.it',
      phone: '1236547899',
      province: 'TO'
    },
    {
      name: 'Claudia',
      lastname: 'Serena',
      fiscalcode: 'CLD467SRN',
      email: 'clasere@mail.it',
      phone: '44455566699',
      province: 'BO'
    },
    {
      name: 'Rosa',
      lastname: 'Tossi',
      fiscalcode: 'RS6789TSS',
      email: 'rtossi@mail.it',
      phone: '1122334455',
      province: 'TO'
    },

  ]
    getUsers(){
      return this.users;
    }
    deleteUser(user){
      let index = this.users.indexOf(user);
      if (index >= 0) {

        this.users.splice(index, 1);

      }
    }
}
