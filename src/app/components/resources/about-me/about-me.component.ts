import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  constructor(private translate: TranslateService){}

  public downObjectives() {
    const objectiveComponent = document.getElementById('objectives-section');
    if (objectiveComponent) {
      objectiveComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
