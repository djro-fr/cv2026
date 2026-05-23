import { Component, DOCUMENT, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-default',
  imports: [Navbar, RouterOutlet],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default implements OnInit, OnDestroy{
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'page-inside');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'page-inside');
  }
}
