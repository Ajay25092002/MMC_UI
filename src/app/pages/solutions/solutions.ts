import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solutions',
  imports: [RouterLink],
  templateUrl: './solutions.html',
})
export class SolutionsComponent {

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
}