import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent {

  skillsData = [
    {
      title: "Backend Development",
      skills: ["ASP.NET Core", "C#", "Web API", "LINQ"]
    },
    {
      title: "Frontend Development",
      skills: ["Angular", "TypeScript", "JavaScript", "Bootstrap"]
    },
    {
      title: "Database & ORM",
      skills: ["SQL Server", "Entity Framework", "ADO.NET", "Stored Procedures", ]
    },
    {
      title: "Tools & Practices",
      skills: ["GitHub", "Swagger", "Postman", "Agile"]
    }
  ];

}