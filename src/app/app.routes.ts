import { Routes } from '@angular/router';
import { Blank } from './layouts/blank/blank';
import { Default } from './layouts/default/default';
import { Home } from './features/home/home';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import { Education } from './features/education/education';
import { Experience } from './features/experience/experience';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Blank,
    children: [
      { path: '', component: Home }
    ]
  },
  {
    path: '',
    component: Default,
    children: [
      { path: 'contact', component: Contact },
      { path: 'education', component: Education },
      { path: 'experience', component: Experience },
      { path: 'skills', component: Skills }
    ]
  },
  { path: '**', component: NotFound }
];
