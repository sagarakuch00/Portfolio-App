import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  experience = "3.2+";

  stats = [
    {
      number: "5+",
      title: "FULL STACK PROJECTS"
    },
    {
      number: "50+",
      title: "APIs & MODULES BUILT"
    }
  ];

  skills = [
    {
      title: "ASP.NET Core & C#",
      desc: "Web API & MVC Development"
    },
    {
      title: "SQL Server & EF Core",
      desc: "Database Design & Optimization"
    },
    {
      title: "Angular & JavaScript",
      desc: "Frontend Development"
    }
  ];

}