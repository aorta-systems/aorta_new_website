import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onVisible(element: HTMLElement) {
    if (!element.classList.contains("active")) {
      element.classList.add("active");
    }
  }

  onInVisible(element: HTMLElement) {
    element.classList.remove("active");
  }


}