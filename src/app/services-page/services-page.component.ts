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
    var serviceCardElement = <HTMLInputElement>element.closest('.service-card');
    if (!serviceCardElement.classList.contains("active")) {
      serviceCardElement.classList.add("active");
    }
  }

  onInVisible(element: HTMLElement) {
    var serviceCardElement = <HTMLInputElement>element.closest('.service-card');
    var serviceCardContainerElement = <HTMLInputElement>element.closest('.service-card-container');
    serviceCardElement.classList.remove("active");
    serviceCardContainerElement.classList.remove("highlight-service-card");
  }


  moveToService(sectionName: String) {
    var allServices = <HTMLCollectionOf<Element>>document.getElementsByClassName('highlight-service-card') || [];
    Array.from(allServices).forEach(function (element) {
      element.classList.remove("highlight-service-card");
    });
  
    var serviceCardElement = <HTMLInputElement>document.getElementById(`${sectionName}`);
    serviceCardElement.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});;
    serviceCardElement.classList.add("highlight-service-card");
  }
}