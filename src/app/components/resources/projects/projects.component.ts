import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ProjectCarouselComponent } from '../project-carousel/project-carousel.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectCarouselComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.projects = this.translate.currentLang === 'pt' ? this.projects_pt : this.projects_en;
    });
  }

  public projects: {
    icon: string;
    alt: string;
    name: string;
    description: string;
    techs: {
      icon: string;
      alt: string;
      name: string;
    }[];
    links: {
      name: string;
      url: string;
    }[];
    imgs: {
      url: string;
      alt: string;
    }[];
  }[] = [];

  public projects_pt: {
    icon: string;
    alt: string;
    name: string;
    description: string;
    techs: {
      icon: string;
      alt: string;
      name: string;
    }[];
    links: {
      name: string;
      url: string;
    }[];
    imgs: {
      url: string;
      alt: string;
    }[];
  }[] = [
    {
      icon: '../../../../assets/icons/pagina.svg',
      name: 'Página',
      description:
        'Aplicativo mobile focado em livros onde os usuários poderiám fazer todo tipo de transferencia entre eles, como venda, doação, troca e empréstimos de livros nosso objetivo era democratizar o acesso a leitura e incentivar a comunidade, contando com lista de desejos e acervo pessoal para facilitar a organização de leitores ávidos',
      alt: 'Icone do projeto Página',
      techs: [
        {
          icon: '../../../../assets/icons/node.svg',
          name: 'Node.js',
          alt: 'Node Js',
        },
        {
          icon: '../../../../assets/icons/typescript.svg',
          name: 'TypeScript',
          alt: 'typescript',
        },
        {
          icon: '../../../../assets/icons/postgresql.svg',
          name: 'PostgreSQL',
          alt: 'postgresql',
        },
        {
          icon: '../../../../assets/icons/angularsvg.svg',
          name: 'Angular',
          alt: 'angular',
        },
      ],
      links: [
        {
          name: 'Back-end >',
          url: 'https://github.com/PaginaApp/PaginaAPI',
        },
        {
          name: 'Front-end >',
          url: 'https://github.com/PaginaApp/PaginaADM',
        },
      ],
      imgs: [
        {
          url: '../../../../assets/imgs/pagina/account.png',
          alt: 'Tela de gerenciamento de contas do ADM',
        },
        {
          url: '../../../../assets/imgs/pagina/book.png',
          alt: 'Tela de edição de livros',
        },
        {
          url: '../../../../assets/imgs/pagina/login.png',
          alt: 'Gráficos para análise do ADM',
        },
        {
          url: '../../../../assets/imgs/pagina/terms.png',
          alt: 'Tela de alteração dos termos de uso',
        },
        {
          url: '../../../../assets/imgs/pagina/users.png',
          alt: 'Tela de listagem de usuários',
        },
      ],
    },
    {
      icon: '../../../../assets/icons/cacaucosmico.svg',
      alt: 'Icone do projeto Página',
      name: 'Cacau Cósmico',
      description:
        'E-commerce de produtos de chocolate, com chat de recomendação de produtos com inteligência artificial, gráficos para análise de produtos vendidos e solicitação de troca do produto.',
      techs: [
        {
          icon: '../../../../assets/icons/node.svg',
          name: 'Node.js',
          alt: 'Node Js',
        },
        {
          icon: '../../../../assets/icons/typescript.svg',
          name: 'TypeScript',
          alt: 'typescript',
        },
        {
          icon: '../../../../assets/icons/postgresql.svg',
          name: 'PostgreSQL',
          alt: 'postgresql',
        },
        {
          icon: '../../../../assets/icons/angularsvg.svg',
          name: 'Angular',
          alt: 'angular',
        },
      ],
      links: [
        {
          name: 'Back-end >',
          url: 'https://github.com/nathan-kos/cacau-cosmico-api',
        },
        {
          name: 'Front-end >',
          url: 'https://github.com/nathan-kos/cacau-cosmico',
        },
      ],
      imgs: [
        {
          url: '../../../../assets/imgs/cacaucosmico/account.png',
          alt: 'Tela de conta do usuário',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/cart.png',
          alt: 'Carrinho de compras',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/chart.png',
          alt: 'Gráficos para análise de produtos vendidos',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/home.png',
          alt: 'Home page do projeto',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/iachat.png',
          alt: 'Chat de recomendação de produtos com inteligência artificial',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/products.png',
          alt: 'Listagem de produtos',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/return.png',
          alt: 'Solicitação de troca do produto',
        },
      ],
    },
  ];

  public projects_en: {
    icon: string;
    alt: string;
    name: string;
    description: string;
    techs: {
      icon: string;
      alt: string;
      name: string;
    }[];
    links: {
      name: string;
      url: string;
    }[];
    imgs: {
      url: string;
      alt: string;
    }[];
  }[] = [
    {
      icon: '../../../../assets/icons/pagina.svg',
      name: 'Página',
      description:
        'Mobile application focused on books where users could make all types of transfers between them, such as selling, donating, exchanging and lending books. Our goal was to democratize access to reading and encourage the community, with a wish list and personal collection to facilitate the organization of avid readers.',
      alt: 'Icone do projeto Página',
      techs: [
        {
          icon: '../../../../assets/icons/node.svg',
          name: 'Node.js',
          alt: 'Node Js',
        },
        {
          icon: '../../../../assets/icons/typescript.svg',
          name: 'TypeScript',
          alt: 'typescript',
        },
        {
          icon: '../../../../assets/icons/postgresql.svg',
          name: 'PostgreSQL',
          alt: 'postgresql',
        },
        {
          icon: '../../../../assets/icons/angularsvg.svg',
          name: 'Angular',
          alt: 'angular',
        },
      ],
      links: [
        {
          name: 'Back-end >',
          url: 'https://github.com/PaginaApp/PaginaAPI',
        },
        {
          name: 'Front-end >',
          url: 'https://github.com/PaginaApp/PaginaADM',
        },
      ],
      imgs: [
        {
          url: '../../../../assets/imgs/pagina/account.png',
          alt: 'Tela de gerenciamento de contas do ADM',
        },
        {
          url: '../../../../assets/imgs/pagina/book.png',
          alt: 'Tela de edição de livros',
        },
        {
          url: '../../../../assets/imgs/pagina/login.png',
          alt: 'Gráficos para análise do ADM',
        },
        {
          url: '../../../../assets/imgs/pagina/terms.png',
          alt: 'Tela de alteração dos termos de uso',
        },
        {
          url: '../../../../assets/imgs/pagina/users.png',
          alt: 'Tela de listagem de usuários',
        },
      ],
    },
    {
      icon: '../../../../assets/icons/cacaucosmico.svg',
      alt: 'Icone do projeto Página',
      name: 'Cacau Cósmico',
      description:
        'E-commerce for chocolate products, with product recommendation chat using artificial intelligence, graphs for analyzing products sold and product exchange requests.',
      techs: [
        {
          icon: '../../../../assets/icons/node.svg',
          name: 'Node.js',
          alt: 'Node Js',
        },
        {
          icon: '../../../../assets/icons/typescript.svg',
          name: 'TypeScript',
          alt: 'typescript',
        },
        {
          icon: '../../../../assets/icons/postgresql.svg',
          name: 'PostgreSQL',
          alt: 'postgresql',
        },
        {
          icon: '../../../../assets/icons/angularsvg.svg',
          name: 'Angular',
          alt: 'angular',
        },
      ],
      links: [
        {
          name: 'Back-end >',
          url: 'https://github.com/nathan-kos/cacau-cosmico-api',
        },
        {
          name: 'Front-end >',
          url: 'https://github.com/nathan-kos/cacau-cosmico',
        },
      ],
      imgs: [
        {
          url: '../../../../assets/imgs/cacaucosmico/account.png',
          alt: 'Tela de conta do usuário',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/cart.png',
          alt: 'Carrinho de compras',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/chart.png',
          alt: 'Gráficos para análise de produtos vendidos',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/home.png',
          alt: 'Home page do projeto',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/iachat.png',
          alt: 'Chat de recomendação de produtos com inteligência artificial',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/products.png',
          alt: 'Listagem de produtos',
        },
        {
          url: '../../../../assets/imgs/cacaucosmico/return.png',
          alt: 'Solicitação de troca do produto',
        },
      ],
    },
  ];

  public openLink(url: string) {
    window.open(url, '_blank');
  }

  changeLenguage(){
    this.projects = this.translate.currentLang === 'en' ? [...this.projects_en] : [...this.projects_pt];
  }
}
