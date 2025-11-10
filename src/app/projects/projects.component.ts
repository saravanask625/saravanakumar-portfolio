import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
  status: 'completed' | 'ongoing' | 'planned';
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    { 
      title: 'E-Commerce Web Application', 
      description: 'Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration built using Angular and Node.js.',
      technologies: ['Angular', 'Node.js', 'MySQL', 'TypeScript', 'Bootstrap', 'REST APIs'],
      category: 'Full Stack',
      highlights: [
        'Responsive design for mobile and desktop',
        'Secure user authentication and authorization',
        'Real-time inventory management',
        'Payment gateway integration'
      ],
      status: 'completed'
    },
    { 
      title: 'Task Management Dashboard', 
      description: 'Interactive dashboard for project management with task tracking, team collaboration features, and real-time updates using Angular and MongoDB.',
      technologies: ['Angular', 'MongoDB', 'TypeScript', 'Material UI', 'Socket.io'],
      category: 'Frontend',
      highlights: [
        'Real-time task updates and notifications',
        'Drag-and-drop interface for task management',
        'Team collaboration and messaging system',
        'Advanced filtering and search capabilities'
      ],
      status: 'completed'
    },
    { 
      title: 'Data Analytics Platform', 
      description: 'Business intelligence platform with interactive charts, data visualization, and reporting features built using React and Python backend.',
      technologies: ['React.js', 'Python', 'MySQL', 'Chart.js', 'Material UI'],
      category: 'Data Visualization',
      highlights: [
        'Interactive data visualization with Chart.js',
        'Custom reporting and export functionality',
        'Real-time data processing and analysis',
        'Multi-user dashboard with role-based access'
      ],
      status: 'completed'
    },
    { 
      title: 'Enterprise CRM System', 
      description: 'Customer relationship management system with lead tracking, sales pipeline management, and automated reporting using Angular and Node.js.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Express.js'],
      category: 'Enterprise',
      highlights: [
        'Lead tracking and conversion analytics',
        'Automated email marketing integration',
        'Sales pipeline visualization',
        'Custom reporting and dashboard widgets'
      ],
      status: 'ongoing'
    },
    { 
      title: 'Portfolio Website', 
      description: 'Modern, responsive portfolio website showcasing professional experience and projects with glassmorphism design and smooth animations.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'CSS3', 'HTML5'],
      category: 'Frontend',
      highlights: [
        'Modern glassmorphism design with animations',
        'Fully responsive and mobile-optimized',
        'Performance optimized with lazy loading',
        'SEO friendly with proper meta tags'
      ],
      status: 'ongoing'
    }
  ];

  getCompletedProjects(): number {
    return this.projects.filter(p => p.status === 'completed').length;
  }

  getOngoingProjects(): number {
    return this.projects.filter(p => p.status === 'ongoing').length;
  }

  getTotalTechnologies(): number {
    const allTechs = this.projects.flatMap(p => p.technologies);
    return new Set(allTechs).size;
  }
}
