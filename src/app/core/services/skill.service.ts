import { inject, Injectable } from '@angular/core';
import { SkillModel } from '../models/skill.model';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class SkillService {

  private readonly dataUrl = "/data/skills.json";
  private readonly httpClient = inject(HttpClient);
  private readonly skills$ = this.httpClient.get<SkillModel[]>(this.dataUrl).pipe(shareReplay(1));

  getAllSkills() {
    return this.skills$;
  }

  getSkillById(id:number){
    return this.skills$.pipe(
      map(skills => skills.find(skill => skill.id === id))
    );
  }

  getSkillsSortedByName(){
    return this.skills$.pipe(
      map(skills => skills.toSorted((a: SkillModel, b: SkillModel) => a.name.localeCompare(b.name)))
    );
  }

  getCategories(){
    return this.skills$.pipe(
      map(skills => [...new Set(skills.map(s => s.category))]
        .toSorted((a: string, b: string) => a.localeCompare(b)))
    );
  }

  getSkillsByCategory(cat:string){
    return this.skills$.pipe(
      map(skills => skills.filter(skill => skill.category === cat))
    );
  }


}
