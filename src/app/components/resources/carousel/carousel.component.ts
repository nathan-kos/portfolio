import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CertificateModalComponent } from '../certificate-modal/certificate-modal.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, NgIf, CertificateModalComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  courses = [
    {
      image: '../../../../assets/imgs/Certificados/labPOO.jpg',
      name: 'Laboratório de programação orientada a objetos (2022)',
      description:
        'Aborda tópicos como UML, qualidade de código, polimorfismo, tratamento de exceções e padrões de projeto, incluindo MVC e Singleton. Apresenta exemplos práticos em Java e Python.',
    },
    {
      image: '../../../../assets/imgs/Certificados/cisco.jpg',
      name: 'CyberSecurity Essentials CISCO (2022)',
      description:
        'Introdução à segurança cibernética, abordando fundamentos para proteger a vida digital pessoal e desafios enfrentados por empresas e governos. Ideal para quem deseja iniciar na área e atender à alta demanda por profissionais de cibersegurança.',
    },
    {
      image: '../../../../assets/imgs/Certificados/startup.jpg',
      name: 'Criação de Startups: Como desenvolver negócios inovadores (2022)',
      description:
        'Curso introdutório sobre criação de startups, abordando métodos como Customer Development e Lean Startup, além de temas como análise de mercado, validação de ideias, marketing digital e investimentos, com insights de empreendedores experientes.',
    },
    {
      image: '../../../../assets/imgs/Certificados/teste.jpg',
      name: 'Introdução ao desenvolvimento orientado por testes e comportamento (2023)',
      description:
        'Introdução ao desenvolvimento orientado por testes (TDD) e comportamento (BDD), cobrindo testes automatizados, criação de casos de teste, uso de ferramentas como Nose e práticas avançadas para aumentar a cobertura e testar objetos simulados.',
    },
  ];

  public showModal: boolean = false;
  public selectedCertificate: string = '';

  public closeModal() {
    this.showModal = false;
  }

  public openModal(src: string) {
    this.selectedCertificate = src;
    this.showModal = true;
  }

  getCarouselNumVisible() {
    return window.innerWidth < 768 ? 1 : 2;
  }
}
