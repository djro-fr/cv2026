import { ChangeDetectorRef, Component, inject, HostListener, OnInit } from '@angular/core';
import { SkillService } from '../../core/services/skill.service';
import { AsyncPipe } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { SkillModel } from '../../core/models/skill.model';
import { SeoService } from '../../core/services/seo';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {
  private readonly seo = inject(SeoService);

  private readonly skillService = inject(SkillService);
  private readonly cdr = inject(ChangeDetectorRef);

  skillsCount = 0;
  showOrnament = true;
  isCategoryDrawerOpen = false;
  categorySelected = '';
  isCategoryListVisible = false;
  hasLongScroll = false;

  ngOnInit() {
    this.seo.update({
      title: 'Compétences - Sylvain Girault, Développeur Front-End (web + apps)',
      description: 'Compétences de Sylvain Girault, développeur front-end (web & mobile apps).',
      url: 'https://cv.djro.fr/skills',
    });
  }

  readonly categories$ = this.skillService.getCategories();
  skills$ = this.pipeWithCount(this.skillService.getSkillsSortedByName());

  private resetOrnament() {
    console.clear();
    this.showOrnament = false;
    setTimeout(() => {
      this.showOrnament = true;
      this.cdr.detectChanges();
    }, 10);
  }

  private pipeWithCount(o: Observable<SkillModel[]>) {
    return o.pipe(
      tap((skills) => {
        this.skillsCount = skills.length;
      }),
    );
  }

  showAllSkills() {
    this.skills$ = this.pipeWithCount(this.skillService.getSkillsSortedByName());
    this.categorySelected = '';
    this.resetOrnament();
  }

  searchSkillsByCategory(cat: string) {
    this.skills$ = this.pipeWithCount(this.skillService.getSkillsByCategory(cat));
    this.categorySelected = cat;
    this.resetOrnament();
    this.isCategoryDrawerOpen = false;
  }

  showCategories() {
    this.isCategoryListVisible = !this.isCategoryListVisible;
    this.isCategoryDrawerOpen = true;
  }

  @HostListener('body:scroll')
  onScroll() {
    this.hasLongScroll = document.body.scrollTop > 400;
  }

  backToTop() {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
