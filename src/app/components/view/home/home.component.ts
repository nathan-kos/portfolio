import { Component } from '@angular/core';
import { AboutMeComponent } from '../../resources/about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
