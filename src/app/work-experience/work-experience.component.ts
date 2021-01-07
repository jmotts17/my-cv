import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  title = "Work Experience";
  company1 = "Old Dominion Freight Line";
  position1 = "Supervisor";
  startDate1 = "November 2016";
  endDate1 = "Current"
  position2 = "Dockworker";
  startDate2 = "September 2014";
  endDate2 = "November 2016";

  constructor() { }

  ngOnInit(): void {
  }

}
