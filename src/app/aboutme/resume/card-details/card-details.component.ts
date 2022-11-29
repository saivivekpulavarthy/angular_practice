import { AnimationDriver } from '@angular/animations/browser';
import { Component, Input, OnInit } from '@angular/core';
import { cardData } from '../../card.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  @Input("cardData")
  data!: cardData;
  constructor() { }
  d1!: cardData;

  ;

  ngOnInit(): void {
    console.log("this.data.per %",this.data.percentage);
    console.log("this.data before",this.data);
    this.data.percentage=20;
    console.log("this.data.college",this.data.domain);
    console.log("this.data",this.data.percentage);
    this.d1=this.data;
    console.log("this.d1",this.d1);
  }

}
