import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLogoSrc = "assets/images/logo_aorta.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
