import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend Technologies',
      color: 'primary',
      skills: [
        { name: 'Angular (8-17)', level: 95, category: 'frontend' },
        { name: 'TypeScript', level: 90, category: 'frontend' },
        { name: 'JavaScript (ES6+)', level: 90, category: 'frontend' },
        { name: 'HTML5', level: 95, category: 'frontend' },
        { name: 'CSS3/SCSS', level: 90, category: 'frontend' },
        { name: 'Responsive Design', level: 92, category: 'frontend' }
      ]
    },
    {
      title: 'Development Tools & Libraries',
      color: 'primary',
      skills: [
        { name: 'Git/GitHub', level: 90, category: 'tools' },
        { name: 'VS Code', level: 95, category: 'tools' },
        { name: 'RxJS', level: 85, category: 'tools' },
        { name: 'Bootstrap', level: 88, category: 'tools' },
        { name: 'Material UI', level: 80, category: 'tools' }
      ]
    }
  ];
}
