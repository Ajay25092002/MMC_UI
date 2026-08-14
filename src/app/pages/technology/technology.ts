import {
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.html',
})
export class TechnologyComponent implements AfterViewInit, OnDestroy {

  // ============================================================
  // TECHNOLOGIES
  // ============================================================

  technologies = [
    {
      title: 'Artificial Intelligence',
      description:
        'Intelligent technology that supports modern mental healthcare delivery and enables better digital experiences.',
    },
    {
      title: 'Generative AI',
      description:
        'AI capabilities that support intelligent interactions, content generation, and healthcare-focused digital experiences.',
    },
    {
      title: 'Machine Learning',
      description:
        'Machine learning capabilities that help transform healthcare data into useful insights and intelligent systems.',
    },
    {
      title: 'Large Language Models',
      description:
        'Advanced language models that enable intelligent understanding and natural interactions within healthcare applications.',
    },
    {
      title: 'Natural Language Processing',
      description:
        'Technology for understanding and working with human language across digital healthcare experiences.',
    },
    {
      title: 'Healthcare Analytics',
      description:
        'Analytics capabilities that transform healthcare data into clear and actionable insights.',
    },
    {
      title: 'Cloud Platforms',
      description:
        'Secure, scalable cloud-based technology architecture for modern healthcare platforms.',
    },
    {
      title: 'Mobile Applications',
      description:
        'Mobile experiences that make mental healthcare technology more accessible and connected.',
    },
    {
      title: 'Web Applications',
      description:
        'Scalable web-based applications designed for healthcare professionals, organizations, and individuals.',
    },
    {
      title: 'Secure APIs',
      description:
        'Secure application interfaces that enable reliable communication between healthcare systems and digital products.',
    },
    {
      title: 'Data Integration',
      description:
        'Integration capabilities that connect healthcare data and systems to create connected digital experiences.',
    },
    {
      title: 'Healthcare Workflow Automation',
      description:
        'Technology-enabled automation that simplifies workflows and helps healthcare professionals work more efficiently.',
    },
  ];


  // ============================================================
  // TECHNOLOGY PRINCIPLES
  // ============================================================

  principles = [
    {
      title: 'Secure',
      description:
        'Technology is designed with security and responsible handling of healthcare information in mind.',
    },
    {
      title: 'Intelligent',
      description:
        'AI capabilities are used to create smarter healthcare products and experiences.',
    },
    {
      title: 'Scalable',
      description:
        'Cloud-based, modular, and scalable architecture supports growing healthcare needs.',
    },
    {
      title: 'Human-Centered',
      description:
        'Technology is designed to support people rather than overwhelm them.',
    },
  ];


  // ============================================================
  // GSAP CONTEXT
  // ============================================================

  private gsapContext?: gsap.Context;


  // ============================================================
  // LIFECYCLE
  // ============================================================

  ngAfterViewInit(): void {

    // Respect users who prefer reduced motion.
    if (this.prefersReducedMotion()) {
      return;
    }


    this.gsapContext = gsap.context(() => {

      this.animateHero();

      this.animateCapabilities();

      this.animatePhilosophy();

      this.animateImpact();

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


    // ----------------------------------------------------------
    // Hero content
    // ----------------------------------------------------------

    timeline
      .fromTo(
        '.technology-hero-eyebrow',
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
        '.technology-hero-title',
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
        '.technology-hero-description',
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
      )

      .fromTo(
        '.technology-hero-description-secondary',
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
        },
        '-=0.3'
      );


    // ----------------------------------------------------------
    // Hero visual
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-hero-visual',
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
        delay: 0.15,
        ease: 'power3.out',
      }
    );


    // ----------------------------------------------------------
    // Hero card floating animation
    // ----------------------------------------------------------

    gsap.to(
      '.technology-hero-card',
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
      '.technology-circle-top',
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
      '.technology-circle-bottom',
      {
        x: -16,
        y: -15,
        rotation: -12,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    );


    // ----------------------------------------------------------
    // Hero features
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-hero-feature',
      {
        x: 20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.85,
        ease: 'power2.out',
      }
    );

  }


  // ============================================================
  // TECHNOLOGY CAPABILITIES
  // ============================================================

  private animateCapabilities(): void {

    // ----------------------------------------------------------
    // Section header
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-capabilities-header',
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
          trigger: '.technology-capabilities-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Technology cards
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-card',
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.technology-grid',
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
      '.technology-number',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: 'back.out(1.7)',

        scrollTrigger: {
          trigger: '.technology-grid',
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
      '.technology-accent',
      {
        scaleX: 0,
        transformOrigin: 'left center',
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.technology-grid',
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // TECHNOLOGY PHILOSOPHY
  // ============================================================

  private animatePhilosophy(): void {

    // ----------------------------------------------------------
    // Left content
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-philosophy-content',
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
          trigger: '.technology-philosophy-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Right content
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-philosophy-details',
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
          trigger: '.technology-philosophy-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Principle cards
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-principle-card',
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
        stagger: 0.1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.technology-principles-grid',
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
      '.technology-principle-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        stagger: 0.1,
        ease: 'back.out(1.7)',

        scrollTrigger: {
          trigger: '.technology-principles-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // TECHNOLOGY IMPACT
  // ============================================================

  private animateImpact(): void {

    // ----------------------------------------------------------
    // Section header
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-impact-header',
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
          trigger: '.technology-impact-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // Impact cards
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-impact-card',
      {
        y: 45,
        opacity: 0,
        scale: 0.98,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.technology-impact-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // ----------------------------------------------------------
    // Impact icons
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-impact-icon',
      {
        scale: 0,
        rotation: -12,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.12,
        ease: 'back.out(1.7)',

        scrollTrigger: {
          trigger: '.technology-impact-grid',
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
      '.technology-cta',
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
          trigger: '.technology-cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    // ----------------------------------------------------------
    // CTA button entrance
    // ----------------------------------------------------------

    gsap.fromTo(
      '.technology-cta-button',
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
          trigger: '.technology-cta-section',
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