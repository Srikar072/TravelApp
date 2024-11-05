import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, ActivatedRoute, RouterModule, RouterLink} from '@angular/router'
import { TravelRatingComponent } from '../travel-rating/travel-rating.component';
import { BookingComponent } from '../booking/booking.component';
import { IBooking } from './travel-list.model';
import { BookingService } from './travel.service';
import { TravelDetailsComponent } from '../travel-details/travel-details.component';
import { AddcityComponent } from '../addcity/addcity.component';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,TravelRatingComponent,RouterModule,AddcityComponent, TravelDetailsComponent,RouterLink] 
})
export class TravelListComponent implements OnInit {
  searchTerm: string = ''; 
  destinations: IBooking[] = [];

  constructor(private _bookService:BookingService){
  }
  ngOnInit():void{
    this.destinations=this._bookService.getBooking();
  }

filteredDestinations() {
  if (this.searchTerm.trim()) {
    this.destinations = this.destinations.filter(city =>
      city.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } 
}
onRatingClicked(message: string): void {
  alert(message);
}
}
/*
get filteredDestinations() {
  const searchLower = this.searchTerm?.toLowerCase() || '';

  return this.destinations.filter(destination =>
    destination.name.toLowerCase().startsWith(searchLower) ||  
    destination.location.toLowerCase().startsWith(searchLower) 
  );
}
getStars(rating: number): string[] {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.25 ? (rating % 1 >= 0.75 ? 1 : 0.5) : 0;
  const totalStars = 5;

  const stars = [
    ...Array(filledStars).fill('filled'),
    ...Array(halfStar ? 1 : 0).fill('half'),
    ...Array(totalStars - filledStars - (halfStar ? 1 : 0)).fill('empty')
  ];

  return stars;

}

setHoverRating(rating: number | null){
  this.hoveredRating = rating;
}

submitRating(destination: IBooking){
  if (this.hoveredRating != null){
    destination.rating = this.hoveredRating;
    this.hoveredRating = null
  }
}
}

  /*
  // A copy of the destinations list to display filtered results
  filteredDestinations: IBooking[] = [...this.destinations];

  // Method to filter destinations based on the search term
  filterDestinations(): void {
    if (!this.searchTerm.trim()) {
      // Reset the filteredDestinations to show all if the searchTerm is empty
      this.filteredDestinations = [...this.destinations];
    } else {
      const searchLower = this.searchTerm.toLowerCase();
      this.filteredDestinations = this.destinations.filter((destination) =>
        destination.name.toLowerCase().includes(searchLower) ||
        destination.location.toLowerCase().includes(searchLower)
      );
    }
  }
}
*/