import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homeImageSrc = "assets/images/homeScreen.jpg";

  constructor ( private router: Router ) {}

  ngOnInit(): void {}

  onVisible(element: HTMLElement) {
    element.classList.add("active");
  }

  onInVisible(element: HTMLElement) {
    element.classList.remove("active");
  }

  handleClickContactUsBtn() {
    this.router.navigateByUrl('/contacts');
  }

}
