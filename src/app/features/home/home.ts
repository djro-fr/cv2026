import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('video1') video1!: ElementRef<HTMLVideoElement>;
  @ViewChild('video2') video2!: ElementRef<HTMLVideoElement>;

  private readonly sources = {
    video1: {
      mobile: 'video/seq02_min.mp4',
      tablet: 'video/seq01.mp4',
      desktop: 'video/seq01.mp4'
    },
    video2: {
      mobile: 'video/seq03_min.mp4',
      tablet: 'video/seq03.mp4',
      desktop: 'video/seq03.mp4'
    }
  };

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const quality = this.getQuality();
    this.changeSource(quality);
  }

  private getQuality(): 'mobile' | 'tablet' | 'desktop' {
    if (!isPlatformBrowser(this.platformId)) return 'desktop';
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  }

  private changeSource(quality: 'mobile' | 'tablet' | 'desktop'): void {
    const v1 = this.video1?.nativeElement;
    const v2 = this.video2?.nativeElement;
    if (!v1 || !v2) return;
    v1.querySelector('source')!.src = this.sources.video1[quality];
    v2.querySelector('source')!.src = this.sources.video2[quality];
    console.info(v1.querySelector('source')!.src);
    console.info(v2.querySelector('source')!.src);
    v1.load();
    v2.load();
  }
}
