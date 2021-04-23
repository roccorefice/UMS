import { Component } from "@angular/core";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
    tableTitle = "Users";
    users = [
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
}
