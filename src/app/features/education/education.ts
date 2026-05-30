import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit {
  constructor(private readonly seo: SeoService) {}
  ngOnInit() {
    this.seo.update({
      title: 'Études, Sylvain Girault',
      description: "Parcours d'études de Sylvain Girault, développeur front-end (web & mobile apps)",
      url: 'https://cv.djro.fr/education'
    });
  }
}
