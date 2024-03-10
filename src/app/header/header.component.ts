import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
ngOnInit(): void {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.navbar-toggler') as HTMLButtonElement;
    const navLinksContainer = document.querySelector('.navbar-collapse') as HTMLDivElement;

    toggleButton.addEventListener('click', () => {
      navLinksContainer.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', () => {
        navLinksContainer.classList.remove('show');
      });
    });
  });
}

downloadPdf() {
  const pdfPath = 'https://drive.google.com/file/d/1PX9KfCYFqIjOCl9H8UK5dmDHyEzOhhja/view?usp=drive_link';
  window.open(pdfPath, '_blank');
}

}
