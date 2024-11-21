import { Component } from '@angular/core';
import { AboutMeComponent } from '../../resources/about-me/about-me.component';
import { ObjectiveComponent } from '../../resources/objective/objective.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ObjectiveComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
