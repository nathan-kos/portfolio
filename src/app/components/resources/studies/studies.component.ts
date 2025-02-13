import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CarouselComponent, TranslatePipe],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css',
})
export class StudiesComponent {}
