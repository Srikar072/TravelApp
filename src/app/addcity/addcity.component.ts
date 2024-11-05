import { Component } from '@angular/core';
import { IBooking } from '../travel-list/travel-list.model';
import { Router } from '@angular/router';
import { BookingService } from '../travel-list/travel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addcity',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent {
  travel: IBooking = {
    tourID: 0,
    img: '',
    name: '',
    location: '',
    rating: 0,
    price: ''
  };

  constructor(
    public router: Router,
    private movService: BookingService
  ) {}

  onSave() {
    if (this.travel) {
      // Add the new travel destination
      this.movService.addTravel(this.travel);
      alert("Travel destination added successfully");
      this.router.navigate(['/travellist']); // Navigate to travel list
    } else {
      alert("No travel destination selected to save.");
    }
  }
}
