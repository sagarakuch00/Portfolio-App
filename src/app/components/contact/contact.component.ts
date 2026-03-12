import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize EmailJS with your Public Key
    emailjs.init('Public_Key');
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  onSubmit() {

    if (this.contactForm.invalid) {
      alert('Please fill all fields correctly');
      return;
    }

    this.loading = true;

    const formData = this.contactForm.value;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'Service_ID',
      'template_ID',
      templateParams
    )
    .then(() => {

      alert('Message sent successfully 🚀');
      this.contactForm.reset();

    })
    .catch((error) => {

      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');

    })
    .finally(() => {

      this.loading = false;

    });

  }

}