import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  age: number;
  address: string;
  email: string;
  phone: string;
  constructor() {
    // todo calculate
    this.age = 22;
    this.address = '7400 Kaposvár Liszt Ferenc utca 22.';
    this.email = 'fodfru98@gmail.com';
    this.phone = '+36203637026';
  }

  ngOnInit() {
  }



}
