import { Component, DOCUMENT, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-default',
  imports: [],
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
