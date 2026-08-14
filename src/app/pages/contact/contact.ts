import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent implements AfterViewInit, OnDestroy {

  // ============================================================
  // GSAP CONTEXT
  // ============================================================

  private gsapContext?: gsap.Context;


  // ============================================================
  // ENQUIRY TYPES
  // ============================================================

  enquiryTypes = [
    'Product Enquiry',
    'Healthcare Partnership',
    'Technology Partnership',
    'Custom AI Development',
    'Investment or Strategic Collaboration',
    'General Enquiry',
  ];


  // ============================================================
  // FORM STATE
  // ============================================================

  submitted = false;


  // ============================================================
  // FORM SUBMISSION
  // ============================================================

  submitForm(): void {

    this.submitted = true;


    // Angular needs to render the @if block first.
    requestAnimationFrame(() => {

      const successMessage =
        document.querySelector<HTMLElement>(
          '.contact-success-message'
        );


      if (!successMessage) {
        return;
      }


      gsap.fromTo(
        successMessage,
        {
          y: 12,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
        }
      );

    });

  }


  // ============================================================
  // LIFECYCLE
  // ============================================================

  ngAfterViewInit(): void {

    // Respect accessibility preference.
    if (this.prefersReducedMotion()) {
      return;
    }


    this.gsapContext = gsap.context(() => {

      this.animateHero();

      this.animateContactContent();

      this.animateForm();

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

      // --------------------------------------------------------
      // Eyebrow
      // --------------------------------------------------------

      .fromTo(
        '.contact-hero-eyebrow',
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


      // --------------------------------------------------------
      // Heading
      // --------------------------------------------------------

      .fromTo(
        '.contact-hero-title',
        {
          y: 55,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
        },
        '-=0.3'
      )


      // --------------------------------------------------------
      // Description
      // --------------------------------------------------------

      .fromTo(
        '.contact-hero-description',
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        '-=0.4'
      );

  }


  // ============================================================
  // CONTACT INFORMATION
  // ============================================================

  private animateContactContent(): void {

    // ----------------------------------------------------------
    // Contact information
    // ----------------------------------------------------------

    gsap.fromTo(
      '.contact-info',
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
          trigger: '.contact-content',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Contact label
    // ----------------------------------------------------------

    gsap.fromTo(
      '.contact-info-label',
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Contact details
    // ----------------------------------------------------------

    gsap.fromTo(
      '.contact-detail',
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.12,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.contact-details',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // CONTACT FORM
  // ============================================================

  private animateForm(): void {

    // ----------------------------------------------------------
    // Form card
    // ----------------------------------------------------------

    gsap.fromTo(
      '.contact-form-card',
      {
        x: 50,
        opacity: 0,
        scale: 0.98,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Form header
    // ----------------------------------------------------------

    gsap.fromTo(
      '.contact-form-header',
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.15,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.contact-form-card',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Form fields
    // ----------------------------------------------------------

    gsap.fromTo(
      '.contact-form-field',
      {
        y: 18,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.contact-form',
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