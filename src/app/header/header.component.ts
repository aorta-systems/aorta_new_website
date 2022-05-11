import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLogoSrc = "assets/images/logo_aorta.png";
  showMenu = false;
  
  @ViewChild('menu') menu!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{   
        if(this.showMenu === true && e.target !== this.menu.nativeElement){
            this.showMenu = false;
        }
    });
  }

  ngOnInit(): void {
  }

  toggleMenu(event: Event) {
    this.showMenu = !this.showMenu;
    event.preventDefault();
    event.stopPropagation();
  }


}