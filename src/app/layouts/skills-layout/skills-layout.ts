import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-skills-layout',
  imports: [Navbar, RouterOutlet],
  templateUrl: './skills-layout.html',
  styleUrl: './skills-layout.css',
})
export class SkillsLayout {}
