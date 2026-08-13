import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  isDark = signal(false);

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.enableDark();
    } else {
      this.enableLight();
    }
  }

  toggle(): void {
    if (this.isDark()) {
      this.enableLight();
    } else {
      this.enableDark();
    }
  }

  enableDark(): void {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.isDark.set(true);
  }

  enableLight(): void {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.isDark.set(false);
  }
}