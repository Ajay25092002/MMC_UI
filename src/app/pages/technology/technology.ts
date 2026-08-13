import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.html',
})
export class TechnologyComponent {

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
}