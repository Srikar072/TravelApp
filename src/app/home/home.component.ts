/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import this for pipes like currency

@Component({
  selector: 'app-home',
  standalone: true, // Standalone component
  imports: [CommonModule], // <-- Add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  places = [
    {
      name: 'Tropical Paradise',
      description: 'A beautiful beach destination with crystal-clear water.',
      rent: 150,
      imageUrl: 'assets/tropical.jpg'
    },
    {
      name: 'Mountain Retreat',
      description: 'A serene place nestled in the mountains.',
      rent: 200,
      imageUrl: 'assets/mountain.jpg'
    },
    {
      name: 'City Lights',
      description: 'A vibrant city experience with top-notch amenities.',
      rent: 250,
      imageUrl: 'assets/city.jpg'
    }
  ];

  constructor() {}
}
*/




import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      const popup = document.getElementById('popup');
      if (popup) {
        popup.classList.add('popup-show');
      }
    }, 2000); 
  }
}


