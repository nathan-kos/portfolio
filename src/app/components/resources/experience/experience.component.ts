import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TimelineModule } from 'primeng/timeline';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineModule,TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {

  constructor(private translate: TranslateService){}

  ngOnInit(): void {

    this.translate.onLangChange.subscribe(() => {
      this.changeLenguage()
    })

    this.changeLenguage();
  }

  events: {
    icon: string;
    text: string;
    alt: string;
    isplaceholder: boolean;
  }[] = []

  events_pt: {
    icon: string;
    text: string;
    alt: string;
    isplaceholder: boolean;
  }[] = [
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
  ];

  events_en: {
    icon: string;
    text: string;
    alt: string;
    isplaceholder: boolean;
  }[] = [
    {
      icon: '../../../../assets/icons/mestres.svg',
      text: 'Back-end Developer Mestres da Web Internship - 03/2023 - 10/2023.',
      alt: 'Mestres da Web',
      isplaceholder: false
    },
    {
      icon: '../../../../assets/icons/newgo.svg',
      text: 'Full-stack Developer New go Internship - 11/2023 - 11/2024',
      alt: 'New go',
      isplaceholder: false
    },
  ];

  public isMobile(): boolean {
    return window.innerWidth < 768 ? true : false;
  }

  changeLenguage(){
    this.events = this.translate.currentLang === 'en' ? [...this.events_en] : [...this.events_pt];
  }
}
