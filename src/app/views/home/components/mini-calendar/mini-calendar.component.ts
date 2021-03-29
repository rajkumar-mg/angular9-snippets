import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.scss']
})
export class MiniCalendarComponent implements OnInit {

  selectedDate: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * 
  * @description
  * metho to observe date change event
  * 
  */
  dateChangEvent(event) {
    this.selectedDate = event;
  }
}
