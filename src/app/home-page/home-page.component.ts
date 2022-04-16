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
    element.classList.add("text-animation");
  }

  onInVisible(element: HTMLElement) {
    element.classList.remove("text-animation");
  }

  handleIntersect(a: any, b: any) {

  }

}
