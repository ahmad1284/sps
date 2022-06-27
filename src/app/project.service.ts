import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private messageService: MessageService) {}

  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    this.messageService.add('ProjectService: fetched projects');
    return projects;
  }

  getProject(id: number): Observable<Project> {
    const project = PROJECTS.find(p => p.id === id)!;
    this.messageService.add(`ProjectService: fetched project id=${id}`)
    return of(project);
  }
}
