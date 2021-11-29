import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-time',
  templateUrl: './custom-time.component.html',
  styleUrls: ['./custom-time.component.css']
})
export class CustomTimeComponent implements OnInit {

  constructor() { }
  time = new Date().toISOString();
  ngOnInit(): void {
  }

}
