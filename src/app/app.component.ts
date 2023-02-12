import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tech Porfolio';
  imgVisible = false;
  

  constructor() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        this.imgVisible = true;
      }
    });
  }
}
