import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { gsap } from 'gsap';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  // ============================================================
  // GSAP CONTEXT
  // ============================================================

  private gsapContext?: gsap.Context;


  // ============================================================
  // LIFECYCLE
  // ============================================================

  ngAfterViewInit(): void {

    if (this.prefersReducedMotion()) {
      return;
    }

    this.gsapContext = gsap.context(() => {

      this.animateHero();

      this.animateHeroVisual();

      this.animateFloatingElements();

    });

  }


  // ============================================================
  // HERO CONTENT
  // ============================================================

  private animateHero(): void {

    const timeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });


    // ----------------------------------------------------------
    // Eyebrow
    // ----------------------------------------------------------

    timeline.fromTo(
      '.hero-eyebrow',
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }
    );


    // ----------------------------------------------------------
    // Main heading
    // ----------------------------------------------------------

    timeline.fromTo(
      '.hero-title',
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      '-=0.3'
    );


    // ----------------------------------------------------------
    // Description
    // ----------------------------------------------------------

    timeline.fromTo(
      '.hero-description',
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      },
      '-=0.4'
    );


    // ----------------------------------------------------------
    // Action buttons
    // ----------------------------------------------------------

    timeline.fromTo(
      '.hero-button',
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
      },
      '-=0.3'
    );

  }


  // ============================================================
  // HERO VISUAL
  // ============================================================

  private animateHeroVisual(): void {

    gsap.fromTo(
      '.hero-visual',
      {
        x: 60,
        opacity: 0,
        scale: 0.96,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      }
    );


    // ----------------------------------------------------------
    // Feature items
    // ----------------------------------------------------------

    gsap.fromTo(
      '.hero-feature',
      {
        x: 20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        delay: 0.8,
        ease: 'power2.out',
      }
    );

  }


  // ============================================================
  // DECORATIVE / FLOATING ELEMENTS
  // ============================================================

  private animateFloatingElements(): void {

    // ----------------------------------------------------------
    // Top decorative circle
    // ----------------------------------------------------------

    gsap.to(
      '.decorative-circle-top',
      {
        x: 18,
        y: 12,
        rotation: 12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    );


    // ----------------------------------------------------------
    // Bottom decorative circle
    // ----------------------------------------------------------

    gsap.to(
      '.decorative-circle-bottom',
      {
        x: -14,
        y: -16,
        rotation: -10,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    );


    // ----------------------------------------------------------
    // Main card
    // ----------------------------------------------------------

    gsap.to(
      '.hero-card',
      {
        y: -7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    );

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