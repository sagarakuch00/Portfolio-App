import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  rotateX = 0;
  rotateY = 0;

  texts = [
    "Full Stack .NET Developer",
    "ASP.NET Core Developer",
    "Angular Developer",
    "Web API Specialist"
  ];

  currentText = "";
  textIndex = 0;
  charIndex = 0;

  ngOnInit() {
    this.typeEffect();
  }

  handleMouseMove(event: MouseEvent) {

    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();

    const x = (event.clientX - rect.left - rect.width / 2) / 30;
    const y = (event.clientY - rect.top - rect.height / 2) / 30;

    this.rotateX = -y;
    this.rotateY = x;

  }

  typeEffect() {

  const word = this.texts[this.textIndex];

  if (this.charIndex < word.length) {

    this.currentText += word[this.charIndex];
    this.charIndex++;

    setTimeout(() => this.typeEffect(), 100);

  } else {

    setTimeout(() => {

      this.currentText = "";
      this.charIndex = 0;
      this.textIndex = (this.textIndex + 1) % this.texts.length;

      this.typeEffect();

    }, 1500);

  }

}
}