import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Saravanakumar Portfolio';
  current = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize current route
    this.current = this.router.url === '/' ? '' : this.router.url.substring(1);
  }

  navigate(route: string): void {
    this.current = route;
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.current === route;
  }
}
