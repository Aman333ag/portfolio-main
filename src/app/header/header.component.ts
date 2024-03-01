import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click',
      function (): void {
        $('.navbar-collapse').toggle();
      }
    );
    $('.nav').on('click',
      function (): void {
        $('.navbar-collapse').toggle();
      }
    );
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
