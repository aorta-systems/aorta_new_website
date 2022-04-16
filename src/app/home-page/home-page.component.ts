import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homeImageSrc = "assets/images/homeScreen.jpg";

  constructor() { }

  ngOnInit(): void {}

  onVisible(element: HTMLElement) {
    console.log('onVisible')
    if (!element.classList.contains("active")) {
      element.classList.add("active");
    }
  }

  onInVisible(element: HTMLElement) {
    console.log('INVisible')
    element.classList.remove("active");
  }


}
