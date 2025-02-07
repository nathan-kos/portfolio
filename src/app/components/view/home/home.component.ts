import { Component } from '@angular/core';
import { AboutMeComponent } from '../../resources/about-me/about-me.component';
import { ExperienceComponent } from '../../resources/experience/experience.component';
import { FooterComponent } from '../../resources/footer/footer.component';
import { LanguageSwitcherComponent } from "../../resources/language-switcher/language-switcher.component";
import { ObjectiveComponent } from '../../resources/objective/objective.component';
import { ProjectsComponent } from '../../resources/projects/projects.component';
import { StudiesComponent } from '../../resources/studies/studies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutMeComponent,
    ObjectiveComponent,
    StudiesComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    LanguageSwitcherComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
