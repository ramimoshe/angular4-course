import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  now: Date;
  stoppedClock = false;

  stopClock() {
    this.stoppedClock = true;
  }

  setNow() {
    this.now = new Date();
    if (!this.stoppedClock) {
      setTimeout(() => this.setNow(), 1000);
    }
  }
  ngOnInit() {
      this.setNow();
  }

}
