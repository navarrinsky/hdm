import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    id: 1,
    name: 'María',
    surname: 'Rodríguez',
    phone: 666333222,
    street: 'Carrer Calvet 158',
    city: 'Barcelona',
    zipcode: 8
  };
  constructor() { };

  ngOnInit() {
  }

}
