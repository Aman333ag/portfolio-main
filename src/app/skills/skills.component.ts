
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild('scrollImages', { static: true }) scrollImages!: ElementRef;
  @ViewChild('leftButton', { static: true }) leftButton!: ElementRef;
  @ViewChild('rightButton', { static: true }) rightButton!: ElementRef;
  skills: any = {
    technologies: [
      { name: ".NET Core, .NET 7, LinQ", remark: 'good' },
      { name: "Angular 15, React JS", remark: 'very-good' },
      { name: "C#, TypeScript, JavaScript", remark: 'good' },
      { name: "MSSQL", remark: 'good' },
      { name: "HTML5, CSS3", remark: 'very-good' }
    ],
    tools: [
      { name: "Azure & Web Services", remark: 'good' },
      { name: "SSMS", remark: 'good' },
      { name: "Swagger", remark: 'excellent' },
      { name: "Git", remark: 'excellent' },
      { name: "Visual Studio, VS Code", remark: 'good' }
    ],
    methodologies: [
      { name: "DevOps", remark: 'average' },
      { name: "TDD", remark: 'excellent' },
      { name: "Unit Testing", remark: 'excellent' },
      { name: "Scrum", remark: 'good' },
      { name: "Design Thinking", remark: 'good' }
    ],
    designPatterns: [
      { name: "MVC" },
      { name: "MVVM", remark: 'excellent' },
      { name: "Singleton", remark: 'excellent' },
      { name: "Observer", remark: 'good' },
      { name: "Factory", remark: 'good' }
    ],
    api: [
      { name: "RESTful APIs", remark: 'average' },
      { name: "SOAP", remark: 'excellent' },
      { name: "OAuth", remark: 'excellent' },
      { name: "OpenAPI/Swagger", remark: 'good' }
    ]
  };
  scrollLength: number = 0;

  ngOnInit(): void {
    this.checkScroll();

    // Add event listeners
    this.scrollImages.nativeElement.addEventListener('scroll', () => this.checkScroll());
    window.addEventListener('resize', () => this.checkScroll());
  }

  checkScroll(): void {
    const currentScroll = this.scrollImages.nativeElement.scrollLeft;

    if (currentScroll === 0) {
      this.leftButton.nativeElement.setAttribute('disabled', 'true');
      this.rightButton.nativeElement.removeAttribute('disabled');
    } else if (currentScroll === this.scrollLength) {
      this.rightButton.nativeElement.setAttribute('disabled', 'true');
      this.leftButton.nativeElement.removeAttribute('disabled');
    } else {
      this.leftButton.nativeElement.removeAttribute('disabled');
      this.rightButton.nativeElement.removeAttribute('disabled');
    }
  }

  leftScroll(): void {
    this.scrollImages.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  rightScroll(): void {
    this.scrollImages.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }
}
