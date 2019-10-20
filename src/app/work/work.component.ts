import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {

  loadDaily: any = true;
  imgSrc: any;

  constructor() { }

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
