import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  school1 = "Max Technical Training";
  program = "Full Stack Java Developer Bootcamp";
  start1 = "August 2020";
  end1 = "February 2021";

  constructor() { }

  ngOnInit(): void {
  }

}
