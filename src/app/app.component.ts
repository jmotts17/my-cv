import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume';
  name = 'Josh Motta';
  address = '555 None Of Your Business St New City, OH 12345';
  phone = '(123) 456-7890';
  email = 'Josh@email.com';
  displayWork = true;
  displayEducation = true;
}
