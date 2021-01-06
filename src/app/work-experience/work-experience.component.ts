import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  company1 = "Old Dominion Freight Line";
  position1 = "Supervisor";
  start1 = "November 2016";
  end1 = "Current"
  position2 = "Dockworker";
  start2 = "September 2014";
  end2 = "November 2016";

  constructor() { }

  ngOnInit(): void {
  }

}
