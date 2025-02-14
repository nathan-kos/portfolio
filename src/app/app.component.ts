import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private translate: TranslateService){
    this.translate.addLangs(['pt', 'en']);
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }

  title = 'Nathan-Kos';
}
