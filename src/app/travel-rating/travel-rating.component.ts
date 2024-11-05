// import { CommonModule } from '@angular/common';
// import { Component, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
// import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// @Component({
//   selector: 'app-movie-rating',
//   standalone: true,
//   imports: [CommonModule,FontAwesomeModule],
//   templateUrl: './travel-rating.component.html',
//   styleUrl: './travel-rating.component.css'
// })
// export class MovieRatingComponent {
//   faStar = faStar;
//   @Input() rating:number;
//   @Output() ratingClicked:EventEmitter<string> = new EvenEmitter<string>();
//   starWidth:number;

// ngOnChanges():void{
//   this.starWidth = this.rating *90/5;
// }

// onClick():void{
//   console.log("Event ")
// }
// }

// import { CommonModule } from '@angular/common';
// import { Component,Input,Output,EventEmitter } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faStar } from "@fortawesome/free-solid-svg-icons";
 
// @Component({
//   selector: 'app-city-rating',
//   standalone: true,
//   imports: [CommonModule,FontAwesomeModule],
//   templateUrl: './travel-rating.component.html',
//   styleUrl: './travel-rating.component.css'
// })
// export class TravelRatingComponent {
 
//   faStar=faStar;
 
//   @Input()
//   rating!: number;
//   starWidth!: number;
 
//   @Output() ratingClicked:EventEmitter<string> =new EventEmitter<string>();
 
//   ngOnChnages():void{
//     this.starWidth=this.rating * 90/5;
//   }
 
//   onClick():void{
//     this.ratingClicked.emit('The rating $(this.rating)')
//   }
 
 
 
// }


import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-city-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './travel-rating.component.html',
  styleUrls: ['./travel-rating.component.css'] 
})
export class TravelRatingComponent implements OnChanges {

  faStar = faStar;
  @Input()
  rating!: number;
  starWidth!: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  
  ngOnChanges(): void {
    this.starWidth = (this.rating * 90) / 5; 
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating is ${this.rating}`);
  }
}