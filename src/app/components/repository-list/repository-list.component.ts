import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {


  pageSize: number = 8; // Number of items per page
  currentPage: number = 1; // Current page number
  repositories = [
    {
      name: 'Library Management Project',
      description: 'A Library Management Project is a system that helps libraries efficiently catalog, organize, and track books, manage patron records, and streamline library operations.',
      skills: ['Java' , 'SQL'],
      html_url: 'https://github.com/akshunangare15/Library-Management-Application' //Project link
    },

    {
      name: 'Calculator Website ',
      description: 'A calculator website provides a user-friendly online platform for performing a wide range of mathematical calculations, from basic arithmetic to more complex equations, helping users solve math problems quickly and conveniently. ',
      skills: ['HTML', 'CSS', ' JavaScript'],
      html_url: 'https://github.com/akshunangare15/Calculator-Website-Using-HTML-CSS-JavaScript' //Project link
    },

    {
      name: 'Recipe book and Shopping App',
      description: 'A recipe book and shopping app is a handy tool that allows users to discover, save, and organize recipes for cooking and meal planning. It also helps create shopping lists based on selected recipes, making grocery shopping more efficient and enjoyable. ',
      skills: ['HTML', 'CSS', 'Angular'],
      html_url: 'https://github.com/akshunangare15/Recipe_Book_and_Shopping_App' //Project link
    },
    {
      name: 'Career Website',
      description: 'A career page is a website section where you can find information about job opportunities at a company. It typically includes job listings, details about the application process, and insights into the company"s work culture and values.',
      skills: ['HTML' ,'SCSS', 'React'],
      html_url: 'https://github.com/akshunangare15/Career-Page' //Project link
    },

    {
      name: 'Omnifood',
      description: 'OmniFood is a convenient and modern food delivery service that offers a diverse menu of delicious meals delivered right to your doorstep, making dining easier and more enjoyable.',
      skills: ['HTML' ,'CSS', 'JavaScript'],
      html_url: 'https://github.com/akshunangare15/Omnifood_Udemy' //Project link
    },

    {
      name: 'Musical Application',
      description: 'A musical application where I collaborated on a 2D music visualizer and drum pad built with ReactJS, designed and managed a playlist database using SQL, and played a role in enhancing the app"s user interface and overall functionality.',
      skills: ['HTML' ,'CSS', 'Typescript', 'React'],
      html_url: 'https://github.com/akshunangare15/Musical-Application' //Project link
    },
    {
      name: 'Library Management Project',
      description: 'A Library Management Project is a system that helps libraries efficiently catalog, organize, and track books, manage patron records, and streamline library operations.',
      skills: ['Java' , 'SQL'],
      html_url: 'https://github.com/akshunangare15/Library-Management-Application' //Project link
    },

    {
      name: 'Calculator Website ',
      description: 'A calculator website provides a user-friendly online platform for performing a wide range of mathematical calculations, from basic arithmetic to more complex equations, helping users solve math problems quickly and conveniently. ',
      skills: ['HTML', 'CSS', ' JavaScript'],
      html_url: 'https://github.com/akshunangare15/Calculator-Website-Using-HTML-CSS-JavaScript' //Project link
    },

    {
      name: 'Recipe book and Shopping App',
      description: 'A recipe book and shopping app is a handy tool that allows users to discover, save, and organize recipes for cooking and meal planning. It also helps create shopping lists based on selected recipes, making grocery shopping more efficient and enjoyable. ',
      skills: ['HTML', 'CSS', 'Angular'],
      html_url: 'https://github.com/akshunangare15/Recipe_Book_and_Shopping_App' //Project link
    },
    {
      name: 'Career Website',
      description: 'A career page is a website section where you can find information about job opportunities at a company. It typically includes job listings, details about the application process, and insights into the company"s work culture and values.',
      skills: ['HTML' ,'SCSS', 'React'],
      html_url: 'https://github.com/akshunangare15/Career-Page' //Project link
    },

    {
      name: 'Omnifood',
      description: 'OmniFood is a convenient and modern food delivery service that offers a diverse menu of delicious meals delivered right to your doorstep, making dining easier and more enjoyable.',
      skills: ['HTML' ,'CSS', 'JavaScript'],
      html_url: 'https://github.com/akshunangare15/Omnifood_Udemy' //Project link
    },

    {
      name: 'Musical Application',
      description: 'A musical application where I collaborated on a 2D music visualizer and drum pad built with ReactJS, designed and managed a playlist database using SQL, and played a role in enhancing the app"s user interface and overall functionality.',
      skills: ['HTML' ,'CSS', 'Typescript', 'React'],
      html_url: 'https://github.com/akshunangare15/Musical-Application' //Project link
    }
  ];

  get totalPages(): number[] {
    return Array(Math.ceil(this.repositories.length / this.pageSize)).fill(0).map((_, i) => i + 1);
  }

  get paginatedRepositories(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.repositories.slice(startIndex, startIndex + this.pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
    constructor() { }

    ngOnInit(): void {
    }
  }
