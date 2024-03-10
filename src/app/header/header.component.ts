import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    // $('.js-scroll-trigger').on('click',
    //   function (): void {
    //     $('.navbar-collapse').toggle();
    //   }
    // );
    // $('.nav').on('click',
    //   function (): void {
    //     $('.navbar-collapse').toggle();
    //   }
    // );
    document.addEventListener("DOMContentLoaded", function () {
      // Get the toggle button and the navigation links container
      const toggleButton = document.querySelector('.navbar-toggler') as HTMLButtonElement;
      const navLinksContainer = document.querySelector('.navbar-collapse') as HTMLDivElement;

      // Add an event listener to the toggle button
      toggleButton.addEventListener('click', function () {
          // Toggle the 'show' class on the navigation links container
          navLinksContainer.classList.toggle('show');
      });

      // Add an event listener to each navigation link to close the navbar when a link is clicked
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      navLinks.forEach(function (navLink) {
          navLink.addEventListener('click', function () {
              // Close the navbar by removing the 'show' class
              navLinksContainer.classList.remove('show');
          });
      });
  });
  }
  downloadPdf() {
    const pdfPath = 'src/assets/Resume_Aman_Gupta.pdf.pdf';
    const downloadLink = document.getElementById('downloadLink') as HTMLAnchorElement;

    if (downloadLink) {
      fetch(pdfPath)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          downloadLink.href = url;
          downloadLink.download = 'Resume_Aman_Gupta.pdf';
          downloadLink.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading PDF:', error));
    } else {
      console.error('Download link not found.');
    }
  }


}
