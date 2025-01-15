import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css',
})
export class ProjectCarouselComponent {
  @Input() imgs: {
    url: string;
    alt: string;
  }[] = [];
}
