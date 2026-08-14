import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
})
export class AboutComponent implements AfterViewInit, OnDestroy {

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

      this.animateWhoWeAre();

      this.animatePrinciples();

      this.animateApproach();

      this.animateCta();

    });

  }


  // ============================================================
  // HERO
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
      '.about-hero-eyebrow',
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
    // Heading
    // ----------------------------------------------------------

    timeline.fromTo(
      '.about-hero-title',
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
      '.about-hero-description',
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

  }


  // ============================================================
  // WHO WE ARE
  // ============================================================

  private animateWhoWeAre(): void {

    // ----------------------------------------------------------
    // Content
    // ----------------------------------------------------------

    gsap.fromTo(
      '.who-content',
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.who-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Visual
    // ----------------------------------------------------------

    gsap.fromTo(
      '.who-visual',
      {
        x: 50,
        opacity: 0,
        scale: 0.96,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.who-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Paragraphs
    // ----------------------------------------------------------

    gsap.fromTo(
      '.who-paragraph',
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.12,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.who-content',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Floating card
    // ----------------------------------------------------------

    gsap.to(
      '.about-card',
      {
        y: -8,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    );


    // ----------------------------------------------------------
    // Top decorative circle
    // ----------------------------------------------------------

    gsap.to(
      '.about-circle-top',
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
      '.about-circle-bottom',
      {
        x: -14,
        y: -16,
        rotation: -12,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    );

  }


  // ============================================================
  // PRINCIPLES
  // ============================================================

  private animatePrinciples(): void {

    // ----------------------------------------------------------
    // Section header
    // ----------------------------------------------------------

    gsap.fromTo(
      '.principles-header',
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.principles-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Principle cards
    // ----------------------------------------------------------

    gsap.fromTo(
      '.principle-card',
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.14,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.principles-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Principle dots
    // ----------------------------------------------------------

    gsap.fromTo(
      '.principle-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        stagger: 0.14,
        ease: 'back.out(1.7)',

        scrollTrigger: {
          trigger: '.principles-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // OUR APPROACH
  // ============================================================

  private animateApproach(): void {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.approach-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },

      defaults: {
        ease: 'power3.out',
      },
    });


    // ----------------------------------------------------------
    // Label
    // ----------------------------------------------------------

    timeline.fromTo(
      '.approach-label',
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
      }
    );


    // ----------------------------------------------------------
    // Heading
    // ----------------------------------------------------------

    timeline.fromTo(
      '.approach-title',
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
      },
      '-=0.2'
    );


    // ----------------------------------------------------------
    // Description
    // ----------------------------------------------------------

    timeline.fromTo(
      '.approach-description',
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      },
      '-=0.3'
    );

  }


  // ============================================================
  // CTA
  // ============================================================

  private animateCta(): void {

    // ----------------------------------------------------------
    // CTA container
    // ----------------------------------------------------------

    gsap.fromTo(
      '.about-cta',
      {
        y: 40,
        opacity: 0,
        scale: 0.98,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.about-cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // CTA button
    // ----------------------------------------------------------

    gsap.fromTo(
      '.about-cta-button',
      {
        x: 25,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.15,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.about-cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
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