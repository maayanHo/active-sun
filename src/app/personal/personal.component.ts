import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, AfterContentChecked {

  isLoading = true;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.isLoading = false;
    this.cdref.detectChanges();
  }

}
