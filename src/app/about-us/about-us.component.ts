/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
*/

import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {}
