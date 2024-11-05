import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.css'
})
export class MovieRatingComponent {
faStar = faStar;
@Input() rating:number = 0;
@Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
starWidth:number = 0;

ngOnChanges():void{
  this.starWidth = this.rating * 90/5;
} 

onClick():void{
this.ratingClicked.emit(`The rating ${this.rating} is clicked!`);
}
}
