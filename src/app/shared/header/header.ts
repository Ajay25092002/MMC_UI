import {
  AfterViewInit,
  Component,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { gsap } from 'gsap';

import { ThemeService } from '../theme/theme.service';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.html',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  // ============================================================
  // SERVICES
  // ============================================================

  private readonly themeService = inject(ThemeService);


  // ============================================================
  // STATE
  // ============================================================

  menuOpen = signal(false);


  // ============================================================
  // GSAP
  // ============================================================

  private gsapContext?: gsap.Context;


  // ============================================================
  // THEME
  // ============================================================

  get isDark(): boolean {
    return this.themeService.isDark();
  }


  toggleTheme(): void {
    this.themeService.toggle();
  }


  // ============================================================
  // MOBILE MENU
  // ============================================================

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }


  closeMenu(): void {
    this.menuOpen.set(false);
  }


  // ============================================================
  // INITIALIZATION
  // ============================================================

  ngAfterViewInit(): void {
    this.initializeAnimation();
  }


  // ============================================================
  // HEADER ANIMATION
  // ============================================================

  private initializeAnimation(): void {

    /*
     * Respect users who have enabled
     * "Reduce Motion" in their OS/browser.
     */
    if (this.prefersReducedMotion()) {
      return;
    }


    this.gsapContext = gsap.context(() => {

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });


      // --------------------------------------------------------
      // Logo
      // --------------------------------------------------------

      timeline.fromTo(
        '.header-logo',
        {
          y: -12,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      );


      // --------------------------------------------------------
      // Desktop navigation
      // --------------------------------------------------------

      timeline.fromTo(
        '.desktop-nav-item',
        {
          y: -8,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.06,
        },
        '-=0.25'
      );


      // --------------------------------------------------------
      // Desktop actions
      // --------------------------------------------------------

      timeline.fromTo(
        '.desktop-header-action',
        {
          y: -8,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.08,
        },
        '-=0.2'
      );

    });

  }


  // ============================================================
  // ACCESSIBILITY
  // ============================================================

  private prefersReducedMotion(): boolean {

    return window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  }


  // ============================================================
  // CLEANUP
  // ============================================================

  ngOnDestroy(): void {

    this.gsapContext?.revert();

  }

}