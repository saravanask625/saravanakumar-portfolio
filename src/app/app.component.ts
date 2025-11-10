import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Saravanakumar Portfolio';
  current = '';

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.current = route;
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.current === route;
  }
}
