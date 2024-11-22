import { Component } from '@angular/core';
import { AboutMeComponent } from '../../resources/about-me/about-me.component';
import { ObjectiveComponent } from '../../resources/objective/objective.component';
import { StudiesComponent } from '../../resources/studies/studies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ObjectiveComponent, StudiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
