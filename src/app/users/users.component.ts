import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [{id : 1,name: 'Daniel'},{id : 2,name: 'Micahel'},{id : 3,name: 'Alex'},{id : 4,name: 'Carlos'}]
  constructor() { }

  ngOnInit() {
  }

}