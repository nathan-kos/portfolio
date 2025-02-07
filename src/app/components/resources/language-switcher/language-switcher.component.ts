import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  constructor(private translate: TranslateService) {}

  toggleLanguage() {
    const currentLang = this.translate.currentLang
    const newLang = currentLang === 'pt' ? 'en' : 'pt';

    this.translate.use(newLang);
  }

}
