import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [

    {
      title: "Transfer Convey – Logistics & Truck Booking Platform",
      image: "assets/transferconvey.png",
      tag: "Logistics & Transportation",
      tagColor: "bg-blue-600",
      border: "hover:border-blue-500",
      techColor: "hover:bg-blue-600",
      description:
        "Logistics and truck booking platform that connects customers with truck owners to simplify cargo transportation.",
      points: [
        "Developed layered architecture for scalable application design",
        "Implemented role-based authentication for Admin, User and Driver",
        "Built truck booking workflow with pickup and drop location selection",
        "Created Admin dashboard to manage users, trucks, pricing and orders",
        "Integrated real-time trip tracking and notifications",
        "Implemented pagination and validation for better user experience"
      ],
      tech: ["ASP.NET Core", "Angular", "SQL Server", "Entity Framework", "Web API"]
    },

    {
      title: "Inventory Management System",
      image: "assets/inventory.png",
      tag: "ENTERPRISE APP",
      tagColor: "bg-purple-600",
      border: "hover:border-purple-500",
      techColor: "hover:bg-purple-600",
      description:
        "Inventory management application used to track product stock, suppliers, orders and warehouse operations.",
      points: [
        "Developed product and stock management modules",
        "Implemented CRUD operations for inventory tracking",
        "Integrated supplier and purchase order management",
        "Designed secure authentication and authorization",
        "Optimized database queries for faster inventory reporting"
      ],
      tech: ["ASP.NET Core", "Angular", "SQL Server", "Web API", "Bootstrap"]
    },

    {
  title: "Hairstyle Masterclass Booking Platform",
  image: "assets/hairvona.png",
  tag: "WEB APPLICATION",
  tagColor: "bg-indigo-600",
  border: "hover:border-indigo-500",
  techColor: "hover:bg-indigo-600",
  description:
    "Online platform that allows beauty professionals and academies to host masterclasses while enabling users to discover, book, and manage beauty training sessions easily.",
  points: [
    "Developed online masterclass discovery and booking system",
    "Implemented course and pricing management for beauty workshops",
    "Built admin dashboard for managing instructors, students, and bookings",
    "Integrated secure database operations using SQL Server",
    "Designed responsive UI for seamless learning and booking experience"
  ],
  tech: ["ASP.NET Core", "Angular", "SQL Server", "REST API", "Bootstrap"]
}

  ];

}