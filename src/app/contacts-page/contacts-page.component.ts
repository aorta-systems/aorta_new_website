import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

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
