import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo : Object ;
  constructor() { }

  ngOnInit() {

    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

  }

}
