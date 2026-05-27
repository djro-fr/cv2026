import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { SkillService } from '../../core/services/skill.service';
import { AsyncPipe } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { SkillModel } from '../../core/models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  private readonly skillService = inject(SkillService);
  readonly categories$ = this.skillService.getCategories();

  showOrnament = true;

  private readonly cdr = inject(ChangeDetectorRef);

  private resetOrnament() {
    console.clear();
    this.showOrnament = false;
    setTimeout(() => {
      this.showOrnament = true;
      this.cdr.detectChanges();
    }
    , 10);
  }

  skillsCount = 0;

  private pipeWithCount(o: Observable<SkillModel[]> ){
    return o.pipe(
      tap(skills => {
        this.skillsCount = skills.length;
      })
    );
  }

  skills$ = this.pipeWithCount(this.skillService.getSkillsSortedByName())

  categorySelected = '';
  isCategoryListVisible = false;

  showAllSkills(){
    this.skills$ = this.pipeWithCount(this.skillService.getSkillsSortedByName());
    this.categorySelected = '';
    this.resetOrnament();
  }

  searchSkillsByCategory(cat:string){
    this.skills$ = this.pipeWithCount(this.skillService.getSkillsByCategory(cat));
    this.categorySelected = cat;
    this.resetOrnament();
  }

  showCategories(){
    this.isCategoryListVisible = !this.isCategoryListVisible;
  }

}
