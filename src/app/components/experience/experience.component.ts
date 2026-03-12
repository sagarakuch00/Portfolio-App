import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [

    {
      period: "Jan 2023 – Present | Pune",
      role: "Software Engineer",
      company: "Square Vision Technologies",
      points: [
        "Developed Full Stack Applications using ASP.NET Core MVC & Web API",
        "Designed and tested REST APIs using Swagger & Postman",
        "Optimized SQL Server queries and stored procedures",
        "Applied OOP principles and C# best practices",
        "Collaborated in Agile teams delivering scalable solutions"
      ],
      tech: ["ASP.NET Core", "C#", "SQL Server", "Web API", "Swagger", "Git"]
    },

    {
      period: "2022 – 2023 | Pune",
      role: ".NET Full Stack Trainee",
      company: "V# Technologies",
      points: [
        "Completed training in ASP.NET Core, MVC, Web API",
        "Built full-stack web applications",
        "Worked with Entity Framework and SQL Server",
        "Practiced front-end with HTML, CSS, JavaScript and Bootstrap"
      ],
      tech: ["ASP.NET", "MVC", "Entity Framework", "SQL Server", "JavaScript"]
    }

  ];

  focusAreas = [

    {
      title: "Full Stack Development",
      desc: "Building scalable web applications using ASP.NET Core, Angular and SQL Server."
    },

    {
      title: "API Development",
      desc: "Designing secure and efficient REST APIs with authentication and validation."
    },

    {
      title: "Database Optimization",
      desc: "Writing efficient SQL queries and stored procedures for high-performance systems."
    }

  ];

}