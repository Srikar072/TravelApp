import { Component } from '@angular/core';
import { IBooking } from '../travel-list/travel-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../travel-list/travel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl:'./forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormComponent {
  id: number | undefined;
  travel: IBooking = {
    tourID: 0,
    img: '',
    name: '',
    location: '',
    rating: 0,
    price: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movService: BookingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!;
      const travelDetails = this.movService.getTravelbyId(this.id);
      if (travelDetails) {
        this.travel = travelDetails;
      }
    });
  }

  onSave() {
    if (this.travel) {
      this.movService.updateTravel(this.travel);
      alert("Travel destination updated successfully");
      this.router.navigate(['/travel-list']);
    } else {
      alert("No travel destination selected to update.");
    }
  }
}