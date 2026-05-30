import { Routes } from '@angular/router';
import { Blank } from './layouts/blank/blank';
import { Default } from './layouts/default/default';
import { SkillsLayout } from './layouts/skills-layout/skills-layout';

export const routes: Routes = [
  {
    path: '',
    component: Blank,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
      }
    ]
  },
  {
    path: '',
    component: SkillsLayout,
    children: [
      {
        path: 'skills',
        loadComponent: () => import('./features/skills/skills').then(m => m.Skills)
      }
    ]
  },
  {
    path: '',
    component: Default,
    children: [
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact)
      },
      {
        path: 'education',
        loadComponent: () => import('./features/education/education').then(m => m.Education)
      },
      {
        path: 'experience',
        loadComponent: () => import('./features/experience/experience').then(m => m.Experience)
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound)
      }
    ]
  },
];
