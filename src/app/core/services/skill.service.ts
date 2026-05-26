import { inject, Injectable } from '@angular/core';
import { SkillModel } from '../models/skill.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class SkillService {

  private readonly dataUrl = "/data/skills.json";
  private readonly httpClient = inject(HttpClient);

  constructor(){
    console.log('service called');
  }

  getListFromServer() {
    console.log('getListFromServer called');
    return this.httpClient.get<SkillModel[]>(this.dataUrl);
  }

  getSkillById(id:number){
    return this.getListFromServer().pipe(
      map(skills => skills.find(a => a.id === id))
    );
  }

  getSkillsSortedByName(){
    return this.getListFromServer().pipe(
      map(skills => skills.toSorted((a: SkillModel, b: SkillModel) => a.name.localeCompare(b.name)))
    );
  }

  getCategories(){
    return this.getListFromServer().pipe(
      map(skills => [...new Set(skills.map(s => s.category))]
        .toSorted((a: string, b: string) => a.localeCompare(b)))
    );
  }

  getSkillByCategory(cat:string){
    return this.getListFromServer().pipe(
      map(skills => skills.filter(a => a.category === cat))
    );
  }


}
