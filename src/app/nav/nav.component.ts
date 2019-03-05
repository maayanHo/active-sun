import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openNav(): void {
    this.isOpen = true;
  }

  closeNav(): void {
    this.isOpen = false;
  }

}
