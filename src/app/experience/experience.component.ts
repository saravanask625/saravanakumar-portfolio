import { Component } from '@angular/core';

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  roles: Role[] = [
    { 
      title: 'Senior Software Developer', 
      company: 'Accenture India Pvt Ltd', 
      period: 'Dec 2024 – Present', 
      location: 'Coimbatore, Tamil Nadu',
      points: [
        'Developed and maintained high-performance, scalable web applications using Angular.', 
        'Designed and implemented Micro frontend Architecture to improve modularity and maintainability.', 
        'Optimized AG Grid performance, enhancing sorting, filtering, and real-time updates.', 
        'Developed and integrated RESTful APIs using Angular’s HttpClient module.', 
        'Implemented Lazy Loading, Two-Way Data Binding, and Reactive Forms to optimize data handling.', 
        'Enhanced error handling, logging mechanisms, and loading indicators to improve UX.', 
        'Developed a separate Angular library to encapsulate reusable components, services, and modules.', 
        'Packaged and built the library using Angular CLI, then successfully imported it into the node modules directory of the application.', 
        'Designed and implemented complex, highly interactive tables using AG Grid such as sorting, filtering, and pagination.', 
        'Integrated dynamic data loading and real-time updates to ensure smooth user experience within grid components.', 
        'Identified recurring issues across different projects and created standardized, scalable solutions within the shared library.' 
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    { 
      title: 'Software Developer', 
      company: 'Accenture India Pvt Ltd', 
      period: 'Aug 2021 – Nov 2024', 
      location: 'Coimbatore, Tamil Nadu',
      points: [
        'Collaborated with backend teams for seamless API integration',
        'Developed and maintained web pages using Sitecore, working with content authors to implement templates and custom fields.',
        'Integrated Sitecore content fields with Angular components to dynamically load content in frontend pages.',
        'Collaborated with backend teams to retrieve and bind content from Sitecore into Angular views using REST APIs'
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs', 'Git']
    }
  ];

  getTotalExperience(): string {
    // Calculate total experience from Aug 2021 to present
    const startDate = new Date('2021-08-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    
    return `${diffYears} years ${diffMonths} months`;
  }
}
