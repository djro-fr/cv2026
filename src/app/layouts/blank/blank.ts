import { Component, DOCUMENT, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-blank',
  imports: [RouterOutlet],
  templateUrl: './blank.html',
  styleUrl: './blank.css',
})

export class Blank implements OnInit, OnDestroy {
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'page-home');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'page-home');
  }
}
