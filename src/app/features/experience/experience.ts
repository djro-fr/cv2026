import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Expérience pro, Sylvain Girault',
      description:
        'Expérience professionnelle de Sylvain Girault, développeur front-end (web & mobile apps)',
      url: 'https://cv.djro.fr/experience',
    });
  }
}
