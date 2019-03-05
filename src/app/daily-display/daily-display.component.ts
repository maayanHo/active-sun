import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-daily-display',
  templateUrl: './daily-display.component.html',
  styleUrls: ['./daily-display.component.scss']
})
export class DailyDisplayComponent implements OnInit {

  @Input() imgSrc: any;
  @Output() hideDailyDisplay: EventEmitter<any> =   new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hideDailyDisplayEvent() {
    this.hideDailyDisplay.emit(true);
  }




}
