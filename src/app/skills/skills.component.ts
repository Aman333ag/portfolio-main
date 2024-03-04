import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[ {name:".NET Core, .NET 7",percent:70,remark:'good'}, {name:"Angular 15, AngularJS, React JS", percent:80,remark:'very-good'},{name:"C#, TypeScript, JavaScript",percent:70,remark:'good'},{name:"MSSQL",percent:70,remark:'good'},{name:"HTML5, CSS3",percent:80,remark:'very-good'}],
    tools:[{name:"Azure & Web Services",percent:70,remark:'good'},{name:"SQL Server Management Studio",percent:70,remark:'good'},{name:"Swagger",percent:85,remark:'excellent'},{name:"Git",percent:90,remark:'excellent'},{name:"Visual Studio, VS Code",percent:75,remark:'good'}],
    methodologies:[{name:"DevOps",percent:50,remark:'average'},{name:"Test Driven Development, Unit Testing",percent:90,remark:'excellent'},{name:"Scrum",percent:70,remark:'good'},{name:"Design Thinking",percent:70,remark:'good'}]
  };



  ngOnInit(): void {
  }

}




