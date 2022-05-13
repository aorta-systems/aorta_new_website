import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLogoSrc = "assets/images/logo_aorta.png";
  _showMenu = false;

  get showMenu(): boolean {
    return this._showMenu;
  }
  set showMenu(value: boolean) {
      this._showMenu = value;
    if (value) {
      this.disableScroll();
    } else {
      this.enableScroll();
    }
  }

  @ViewChild('menu') menu!: ElementRef;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{   
        if(this.showMenu === true && e.target !== this.menu.nativeElement){
            this.showMenu = false;
        }
    });
  }

  ngOnInit(): void {}

  toggleMenu(event: Event) {
    this.showMenu = !this.showMenu;
    event.preventDefault();
    event.stopPropagation();

  }

  preventDefault(event: Event) {
    event.preventDefault();
  }
  

  disableScroll() {
    window.addEventListener('wheel', this.preventDefault, { passive: false }); // modern desktop
    window.addEventListener('touchmove', this.preventDefault, { passive: false }); // mobile
  }

  enableScroll() {
    window.removeEventListener('wheel', this.preventDefault, false); // modern desktop
    window.removeEventListener('touchmove', this.preventDefault, false); // mobile
}

}