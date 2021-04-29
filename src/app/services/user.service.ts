import { Injectable } from '@angular/core';
import { User } from '../classes/user';



@Injectable()

export class UserService{
  users: User[] = [
    {
      id: 1,
      name: 'Mario',
      lastname: 'Rossi',
      fiscalcode: 'MRS999MRS',
      email: 'mrossi@mail.it',
      phone: '3339988777',
      province: 'MI'
    },
    {
      id: 2,
      name: 'Ciccio',
      lastname: 'Pasticcio',
      fiscalcode: 'CPC88CPC',
      email: 'ciccio@mail.it',
      phone: '223366558',
      province: 'NA'
    },
    {
      id: 3,
      name: 'Fabio',
      lastname: 'Bianchi',
      fiscalcode: 'FBC456BNC',
      email: 'fbianchi@mail.it',
      phone: '1236547899',
      province: 'TO'
    },
    {
      id: 4,
      name: 'Claudia',
      lastname: 'Serena',
      fiscalcode: 'CLD467SRN',
      email: 'clasere@mail.it',
      phone: '44455566699',
      province: 'BO'
    },
    {
      id: 5,
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
