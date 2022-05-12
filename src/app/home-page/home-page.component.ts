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
    if (!element.classList.contains("active")) {
      element.classList.add("active");
    }
  }

  onRotareCard(element: HTMLElement) {
    var card: HTMLElement = element.closest(".card") as HTMLElement;
    card.classList.add("active");
  }

  onReturnCard(element: HTMLElement) {
    var card: HTMLElement = element.closest(".card") as HTMLElement;
    card.classList.remove("active");
  }



  onInVisible(element: HTMLElement) {
    element.classList.remove("active");
  }

  handleClickContactUsBtn() {

    this.router.navigateByUrl('/contacts');
    // const dialogConfig = new MatDialogConfig();

    // // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // const dialogRef = this.dialog.open(ModalContactUsComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
