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
  selector: 'app-solutions',
  imports: [RouterLink],
  templateUrl: './solutions.html',
})
export class SolutionsComponent implements AfterViewInit, OnDestroy {

  // ============================================================
  // DATA
  // ============================================================

  solutions = [
    {
      title: 'AI-Powered Mental Health Platforms',
      description:
        'Digital platforms that support mental health screening, assessments, monitoring, patient engagement, and personalized care journeys.',
    },
    {
      title: 'Clinical Decision Support',
      description:
        'AI-assisted insights that help professionals improve documentation, care planning, patient follow-up, and clinical workflows.',
    },
    {
      title: 'Conversational AI',
      description:
        'Secure digital assistants that support guided interactions, psychoeducation, wellness check-ins, and patient engagement.',
    },
    {
      title: 'Healthcare Analytics',
      description:
        'Dashboards and reporting tools that transform healthcare data into clear, actionable insights.',
    },
    {
      title: 'Digital Mental Health Programs',
      description:
        'Technology-enabled programs that help healthcare providers extend support beyond physical consultations.',
    },
    {
      title: 'Custom Healthcare AI Products',
      description:
        'Design and development of AI-powered healthcare products for hospitals, clinics, startups, educational institutions, and enterprises.',
    },
  ];


  // ============================================================
  // GSAP
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

      this.animateSolutions();

      this.animateEcosystem();

      this.animateApproach();

      this.animateCTA();

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


    timeline
      .fromTo(
        '.solutions-hero-eyebrow',
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }
      )

      .fromTo(
        '.solutions-hero-title',
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
      )

      .fromTo(
        '.solutions-hero-description',
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        '-=0.35'
      );

  }


  // ============================================================
  // SOLUTIONS
  // ============================================================

  private animateSolutions(): void {

    // ----------------------------------------------------------
    // Section header
    // ----------------------------------------------------------

    gsap.fromTo(
      '.solutions-header',
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
          trigger: '.solutions-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Solution cards
    // ----------------------------------------------------------

    gsap.fromTo(
      '.solution-card',
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.solutions-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Card numbers
    // ----------------------------------------------------------

    gsap.fromTo(
      '.solution-number',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        stagger: 0.12,
        ease: 'back.out(1.7)',

        scrollTrigger: {
          trigger: '.solutions-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Accent lines
    // ----------------------------------------------------------

    gsap.fromTo(
      '.solution-accent',
      {
        width: 0,
        opacity: 0,
      },
      {
        width: '3rem',
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.solutions-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // HEALTHCARE ECOSYSTEM
  // ============================================================

  private animateEcosystem(): void {

    // ----------------------------------------------------------
    // Header
    // ----------------------------------------------------------

    gsap.fromTo(
      '.ecosystem-header',
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
          trigger: '.ecosystem-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Cards
    // ----------------------------------------------------------

    gsap.fromTo(
      '.ecosystem-card',
      {
        y: 35,
        opacity: 0,
        scale: 0.98,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.ecosystem-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // APPROACH
  // ============================================================

  private animateApproach(): void {

    // ----------------------------------------------------------
    // Left content
    // ----------------------------------------------------------

    gsap.fromTo(
      '.approach-content',
      {
        x: -45,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.approach-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Right content
    // ----------------------------------------------------------

    gsap.fromTo(
      '.approach-details',
      {
        x: 45,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.approach-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Pills
    // ----------------------------------------------------------

    gsap.fromTo(
      '.approach-pill',
      {
        y: 15,
        opacity: 0,
        scale: 0.96,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.45,
        stagger: 0.1,
        ease: 'back.out(1.4)',

        scrollTrigger: {
          trigger: '.approach-details',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // CTA
  // ============================================================

  private animateCTA(): void {

    // ----------------------------------------------------------
    // CTA container
    // ----------------------------------------------------------

    gsap.fromTo(
      '.solutions-cta',
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
          trigger: '.solutions-cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // CTA button
    // ----------------------------------------------------------

    gsap.fromTo(
      '.solutions-cta-button',
      {
        x: 20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.solutions-cta-section',
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