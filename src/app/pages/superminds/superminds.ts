import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-superminds',
  imports: [RouterLink],
  templateUrl: './superminds.html',
})
export class SupermindsComponent {

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
}