import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      'Id': 1,
      'Name': 'Shelton range',
      'Type': 'House',
      'Price': 12000
    },
    {
      'Id': 2,
      'Name': 'Philadelphia',
      'Type': 'House',
      'Price': 124876
    },
    {
      'Id': 3,
      'Name': 'Bullaster',
      'Type': 'House',
      'Price': 78256
    },
    {
      'Id': 4,
      'Name': 'CauseWay',
      'Type': 'House',
      'Price': 19829
    },
    {
      'Id': 5,
      'Name': 'Pilot Nerja',
      'Type': 'House',
      'Price': 1566
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
