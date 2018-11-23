import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  cards = [
    { title: 'Card 1', cols: 1, rows: 1},
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 },
    { title: 'Card 5', cols: 1, rows: 1 },
    { title: 'Card 6', cols: 1, rows: 1 },
    { title: 'Card 7', cols: 1, rows: 1 },
    { title: 'Card 8', cols: 1, rows: 1 },
    { title: 'Card 9', cols: 1, rows: 1 },
    { title: 'Card 100000', cols: 1, rows: 1 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
