import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact implements OnInit {
  constructor(private readonly seo: SeoService) {}
  ngOnInit() {
    this.seo.update({
      title: 'Contact, Sylvain Girault',
      description: 'Contactez Sylvain Girault, développeur front-end (web & mobile apps)',
      url: 'https://cv.djro.fr/contact'
    });
  }
}
