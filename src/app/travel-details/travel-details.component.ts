import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../travel-list/travel.service';
import { map } from 'rxjs';
import { IBooking } from '../travel-list/travel-list.model';
 
@Component({
  selector: 'app-travel-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl:'./travel-details.component.html',
  styleUrl: './travel-details.component.css'
})
export class TravelDetailsComponent implements OnInit{
  id: number | undefined;
  travel: IBooking | undefined;
 
  constructor(private router: Router, private route: ActivatedRoute, private bookService:BookingService) {}
 
  ngOnInit(): void {
   
    //this.id = +this.route.snapshot.params['tourID'];
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('tourID')!

      this.travel=this.bookService.getTravelbyId(this.id)

    })
  }
onBack(): void {
    this.router.navigate(['/travellist']);
} 
onEdit():void{
  this.router.navigate([`/traveldetails/${this.id}/edit`]);
}

onDelete(): void {
  if (this.id !== undefined) {
    this.bookService.deleteTravel(this.id);
    alert("Travel destination deleted successfully");
    this.router.navigate(['/travellist']);
  } else {
    alert("No travel destination selected to delete.");
  }
}

}