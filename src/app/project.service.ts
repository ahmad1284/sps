import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }
}
