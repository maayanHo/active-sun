import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  loadDaily: any = true;
  imgSrc: any;

  constructor() {

  }

  ngOnInit() {
  }

  loadDailyImage(src) {
    this.loadDaily = false;
    this.imgSrc = src;
  }

  hideDailyDisplayEvent(event) {
    this.loadDaily = event;
  }

}
