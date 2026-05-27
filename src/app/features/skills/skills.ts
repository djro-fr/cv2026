import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { SkillService } from '../../core/services/skill.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  private readonly skillService = inject(SkillService);

  categories$ = this.skillService.getCategories();
  skills$ = this.skillService.getSkillsSortedByName();

  catSelected : string = '';

  @ViewChild('listCategories') listCategories!: ElementRef;
  @ViewChild('categorySelected') categorySelected!: ElementRef;
  @ViewChild('allCategoriesButton') allCategoriesButton!: ElementRef;
  @ViewChild('allCategoriesTag') allCategoriesTag!: ElementRef;

  showAllSkills(){
    const catElt = this.categorySelected.nativeElement;
    const allCatsBtn = this.allCategoriesButton.nativeElement;
    const allCatsTag = this.allCategoriesTag.nativeElement;
    this.skills$ = this.skillService.getSkillsSortedByName();
    catElt.classList.replace('inline-block','hidden');
    allCatsBtn.classList.replace('inline-block','hidden');
    allCatsTag.classList.replace('hidden','inline-block');
  }

  searchSkillsByCategory(cat:string){
    const catElt = this.categorySelected.nativeElement;
    const allCatsBtn = this.allCategoriesButton.nativeElement;
    const allCatsTag = this.allCategoriesTag.nativeElement;
    this.skills$ = this.skillService.getSkillsByCategory(cat);
    catElt.classList.replace('hidden','inline-block');
    allCatsBtn.classList.replace('hidden','inline-block');
    allCatsTag.classList.replace('inline-block','hidden');
    this.catSelected = cat;

  }

  showCategories(){
    const list = this.listCategories.nativeElement;
    list.classList.toggle('hidden');
  }

}
