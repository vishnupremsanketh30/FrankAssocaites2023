import { Component } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  fatwitter = faTwitter;
  fafacebook = faFacebook;
  submit(){
    console.log("working");
  }
}
