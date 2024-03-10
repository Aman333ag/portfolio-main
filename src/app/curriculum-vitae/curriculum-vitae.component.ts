import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']

})
export class CurriculumVitaeComponent implements OnInit {

  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;

   experiences = [
    {
      "title": "Software Developer",
      "company": "SAGO",
      "period": "2021 - Working",
      "missions": [
        {
          "heading": "Enhancing User Experience",
          "name": "Evaluate and implement improvements to enhance the overall user experience of the application."
        },
        {
          "heading": "Security Enhancements",
          "name": "Conduct security audits and implement measures to enhance the security of the application."
        },
        {
          "heading": "Performance Optimization",
          "name": "Identify and optimize performance bottlenecks to ensure the application runs efficiently."
        },
        {
          "heading": "Integration of Third-Party Services",
          "name": "Explore and integrate relevant third-party services or APIs to extend the functionality of the application."
        },
        {
          "heading": "Accessibility Improvements",
          "name": "Ensure that the application is accessible to users with disabilities by implementing necessary accessibility features."
        },
        {
          "heading": "Codebase Refactoring",
          "name": "Review and refactor existing code to improve maintainability, readability, and adherence to coding standards."
        },
        {
          "heading": "Continuous Integration/Continuous Deployment (CI/CD) Pipeline",
          "name": "Enhance and optimize the CI/CD pipeline to streamline the development and deployment process."
        },
      ],
      "detailIsDisplayed": false
    }

];


  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }

  detailOnClick(experiences:any) {
    experiences.detailIsDisplayed=!experiences.detailIsDisplayed;
  }


}
