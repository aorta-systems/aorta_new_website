import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  loading = false;
  messageSent = false;
  nameFormControl    = new FormControl("", [ Validators.required ]);
  emailFormControl   = new FormControl("", [ Validators.required, Validators.email ]);
  phoneFormControl   = new FormControl("", [ ]);
  messageFormControl = new FormControl("", [ Validators.required, Validators.minLength(4) ]);

  constructor(private http: HttpClient) { }

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

  handleInputPhone(event: Event) {
    const target = event.target as HTMLInputElement;

    const input = target.value.replace(/\D/g,'').substring(0,11);
    const codeCountry = input.substring(0,1);
    const areaCode = input.substring(1,4);
    const middle = input.substring(4,7);
    const last = input.substring(7,11);

    if (input.length > 7){target.value = `+${codeCountry}(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 4){target.value = `+${codeCountry}(${areaCode}) ${middle}`;}
    else if(input.length > 1){target.value = `+${codeCountry}(${areaCode}`;}
    else if(input.length > 0){target.value = `+${codeCountry}`;}
  }

  sendEmail() {
    this.loading = true;
    const email = {
      name : this.nameFormControl.value,
      email : this.emailFormControl.value,
      phone : this.phoneFormControl.value,
      message : this.messageFormControl.value
    };

    this.messageSent = true;

    this.http.post('/sendmail', email).subscribe(
      data => {
        // console.log(data)
      },
      err => {
        console.error(err);
      },
      () => {
        this.loading = false;
      }
    )
  }

}