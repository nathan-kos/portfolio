import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  openEmail() {
    window.open('mailto:nathanks0210@gmail.com');
  }

  openWhatsApp() {
    window.open('https://wa.me/551147598349');
  }
}
