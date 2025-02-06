import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule,],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  events: {
    icon: string;
    text: string;
    alt: string;
    isplaceholder: boolean;
  }[] = [
    // { icon: '', text: '', alt: '', isplaceholder: true }, // Evento vazio antes
    {
      icon: '../../../../assets/icons/mestres.svg',
      text: 'Desenvolvedor Back-end Mestres da Web Estágio - 03/2023 - 10/2023.',
      alt: 'Mestres da Web',
      isplaceholder: false
    },
    {
      icon: '../../../../assets/icons/newgo.svg',
      text: 'Desenvolvedor Full-stack New go Estágio - 11/2023 - 11/2024',
      alt: 'New go',
      isplaceholder: false
    },
    // { icon: '', text: '', alt: '', isplaceholder: true }, // Evento vazio depois
  ];

  public isMobile(): boolean {
    return window.innerWidth < 768 ? true : false;
  }
}
