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
  selector: 'app-superminds',
  imports: [RouterLink],
  templateUrl: './superminds.html',
})
export class SupermindsComponent implements AfterViewInit, OnDestroy {

  private ctx?: gsap.Context;


  // ============================================================
  // CAPABILITIES
  // ============================================================

  capabilities = [
    {
      title: 'AI-Assisted Mental Health Assessments',
      description:
        'Support structured mental health assessments with intelligent technology designed around healthcare workflows.',
    },
    {
      title: 'Digital Patient Engagement',
      description:
        'Enable meaningful digital interactions between individuals and mental healthcare providers.',
    },
    {
      title: 'Clinical Workflow Support',
      description:
        'Help healthcare professionals manage workflows, follow-ups, and care-related activities more efficiently.',
    },
    {
      title: 'Secure Health Information Management',
      description:
        'Support secure handling and management of health information within the digital healthcare experience.',
    },
    {
      title: 'Personalized Mental Wellness Journeys',
      description:
        'Create personalized digital experiences that support individuals throughout their mental wellness journey.',
    },
    {
      title: 'Analytics & Reporting',
      description:
        'Transform healthcare information into useful analytics and reporting to support better visibility and decision-making.',
    },
    {
      title: 'Progress Monitoring',
      description:
        'Support structured follow-up and monitoring of progress across the mental healthcare journey.',
    },
    {
      title: 'Multi-Stakeholder Collaboration',
      description:
        'Connect clinicians, healthcare providers, institutions, and individuals through a collaborative digital ecosystem.',
    },
  ];


  // ============================================================
  // PRINCIPLES
  // ============================================================

  principles = [
    {
      title: 'Healthcare First',
      description:
        'Every product is designed around meaningful healthcare needs, professional workflows, and patient well-being.',
    },
    {
      title: 'Responsible by Design',
      description:
        'We prioritize data privacy, security, ethical AI, transparency, and appropriate human oversight.',
    },
    {
      title: 'Built for Scale',
      description:
        'Our products are designed using secure, cloud-based, modular, and scalable technology architecture.',
    },
    {
      title: 'Designed for Adoption',
      description:
        'We focus on intuitive user experiences that can be adopted by healthcare professionals, organizations, and users.',
    },
    {
      title: 'Collaborative Innovation',
      description:
        'We work closely with mental health professionals, healthcare institutions, technology partners, and domain experts.',
    },
  ];


  // ============================================================
  // LIFECYCLE
  // ============================================================

  ngAfterViewInit(): void {

    this.ctx = gsap.context(() => {

      this.animateHero();

      this.animatePlatform();

      this.animateEcosystem();

      this.animatePhilosophy();

      this.animateCTA();

    });

  }


  // ============================================================
  // HERO
  // ============================================================

  private animateHero(): void {

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    });


    heroTimeline

      // Eyebrow
      .from('.superminds-hero-eyebrow', {
        y: 25,
        opacity: 0,
        duration: 0.7,
      })

      // Heading
      .from(
        '.superminds-hero-title',
        {
          y: 60,
          opacity: 0,
          duration: 1,
        },
        '-=0.35'
      )

      // First paragraph
      .from(
        '.superminds-hero-description',
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
        },
        '-=0.5'
      )

      // Second paragraph
      .from(
        '.superminds-hero-description-secondary',
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.4'
      )

      // Buttons
      .from(
        '.superminds-hero-actions',
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.3'
      );


    // Hero visual enters separately

    gsap.from('.superminds-hero-visual', {
      x: 70,
      opacity: 0,
      scale: 0.92,
      duration: 1.2,
      delay: 0.15,
      ease: 'power3.out',
    });


    // Product card subtle floating motion

    gsap.to('.superminds-product-card', {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });


    // Decorative circles

    gsap.to('.superminds-circle-top', {
      x: 20,
      y: 15,
      rotation: 18,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });


    gsap.to('.superminds-circle-bottom', {
      x: -18,
      y: -15,
      rotation: -15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });


    // Product feature dots

    gsap.fromTo(
      '.superminds-product-feature',
      {
        x: 20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        delay: 1,
        ease: 'power2.out',
      }
    );

  }


  // ============================================================
  // PLATFORM / CAPABILITIES
  // ============================================================

  private animatePlatform(): void {

    // Section header

    gsap.fromTo(
      '.platform-header',
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.platform-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // Capability cards

    gsap.fromTo(
      '.capability-card',
      {
        y: 55,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.capabilities-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // Capability numbers

    gsap.fromTo(
      '.capability-number',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',

        scrollTrigger: {
          trigger: '.capabilities-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // Capability accent lines

    gsap.fromTo(
      '.capability-accent',
      {
        width: 0,
        opacity: 0,
      },
      {
        width: '2.5rem',
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.capabilities-grid',
          start: 'top 78%',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // CONNECTED ECOSYSTEM
  // ============================================================

  private animateEcosystem(): void {

    // Left heading

    gsap.fromTo(
      '.ecosystem-content',
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
          trigger: '.ecosystem-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // Right content

    gsap.fromTo(
      '.ecosystem-details',
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.ecosystem-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // Stakeholder cards

    gsap.fromTo(
      '.stakeholder-card',
      {
        y: 35,
        opacity: 0,
        scale: 0.97,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.stakeholder-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // PRODUCT PHILOSOPHY
  // ============================================================

  private animatePhilosophy(): void {

    // Header

    gsap.fromTo(
      '.philosophy-header',
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.philosophy-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // Principle cards

    gsap.fromTo(
      '.principle-card',
      {
        y: 45,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.principles-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // Principle dots

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
        stagger: 0.1,
        ease: 'back.out(1.8)',

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
  // CTA
  // ============================================================

  private animateCTA(): void {

    // CTA container

    gsap.fromTo(
      '.superminds-cta',
      {
        y: 50,
        opacity: 0,
        scale: 0.97,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: '.superminds-cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },

        immediateRender: false,
      }
    );


    // CTA button

    gsap.fromTo(
      '.superminds-cta-button',
      {
        x: 30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: '.superminds-cta-section',
          start: 'top 80%',
        },

        immediateRender: false,
      }
    );

  }


  // ============================================================
  // CLEANUP
  // ============================================================

  ngOnDestroy(): void {

    this.ctx?.revert();

  }

}