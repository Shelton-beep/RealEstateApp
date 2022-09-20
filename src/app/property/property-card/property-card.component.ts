import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  Property: any = {
    'Id': 1,
    'Name': 'Shelton range',
    'Type': 'House',
    'Price': 12000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
