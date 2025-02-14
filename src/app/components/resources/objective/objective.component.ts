import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-objective',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './objective.component.html',
  styleUrl: './objective.component.css',
})
export class ObjectiveComponent {
  public goTo(local: string) {
    switch (local) {
      case 'E-mail':
        window.open('mailto:nathanks0210@gmail.com');
        break;
      case 'LinkedIn':
        window.open(
          'https://www.linkedin.com/in/nathan-kosmalski/',
          '_blank',
          'noopener,noreferrer'
        );
        break;
      case 'GitHub':
        window.open(
          'https://github.com/nathan-kos',
          '_blank',
          'noopener,noreferrer'
        );
        break;
      default:
        console.warn('Destino não encontrado:', local);
    }
  }
}
