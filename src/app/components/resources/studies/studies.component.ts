import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css',
})
export class StudiesComponent {}
