import { Component, inject } from '@angular/core';
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

  categorySelected : string = '';
  isCategoryListVisible = false;

  showAllSkills(){
    this.skills$ = this.skillService.getSkillsSortedByName();
    this.categorySelected = '';
  }

  searchSkillsByCategory(cat:string){
    this.skills$ = this.skillService.getSkillsByCategory(cat);
    this.categorySelected = cat;
  }

  showCategories(){
    this.isCategoryListVisible = !this.isCategoryListVisible;
  }

}
