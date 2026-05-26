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
  skills$ = this.skillService.getSkillsSortedByName();
  categories$ = this.skillService.getCategories();
}
