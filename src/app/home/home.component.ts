import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    var options = {
      strings: ['Web Developer', 'Freelancer'],
      typeSpeed: 80,
          loop: true,
          backDelay: 1100,
          backSpeed: 30
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

downloadPdf() {
  const pdfPath = 'https://drive.google.com/file/d/1Xm7nBAGorj-oX7obogsl2ltFqQfxaY6C/view?usp=drive_link';
  window.open(pdfPath, '_blank');
}
}
