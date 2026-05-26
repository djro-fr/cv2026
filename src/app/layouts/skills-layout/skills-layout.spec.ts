import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLayout } from './skills-layout';

describe('SkillsLayout', () => {
  let component: SkillsLayout;
  let fixture: ComponentFixture<SkillsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
