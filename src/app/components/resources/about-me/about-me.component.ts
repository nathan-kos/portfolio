import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  public downObjectives() {
    const objectiveComponent = document.getElementById('objectives-section');
    if (objectiveComponent) {
      objectiveComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
