import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project : Project = {
    id: 1,
    name: 'Water Sensor'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
