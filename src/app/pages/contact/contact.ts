import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {

  enquiryTypes = [
    'Product Enquiry',
    'Healthcare Partnership',
    'Technology Partnership',
    'Custom AI Development',
    'Investment or Strategic Collaboration',
    'General Enquiry',
  ];

  submitted = false;

  submitForm(): void {
    this.submitted = true;
  }
}