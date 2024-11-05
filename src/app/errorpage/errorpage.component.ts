import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  templateUrl: './errorpage.component.html',
  styleUrl: './errorpage.component.css'
})

export class ErrorpageComponent {

}
 