import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {
  recurring: boolean = true;
  constructor(
  ) { }

  ngOnInit() {
  }
  isRecurring(event) {
    console.log(this.recurring);
  }
}
