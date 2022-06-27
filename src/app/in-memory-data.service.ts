import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {

  createDb() {
    const projects = [
      { id: 12, name: 'Swahili NER' },
      { id: 16, name: 'Digital Storytelling' },
      { id: 14, name: 'Virtual Tours' },
      { id: 13, name: 'Twitter Sentiment' },
      { id: 15, name: '3D Pointer' },
      { id: 17, name: 'Route Finder' },
      { id: 18, name: 'Virtual assistance' },
      { id: 19, name: 'Diet Planner' },
      { id: 20, name: 'GPA calculator' },
    ];
    return { projects };
  }

  // Overrides the genId method to ensure that a project always has an id.
  // If the projects array is empty,
  // the method below returns the initial number (11).
  // if the projects array is not empty, the method below returns the highest
  // project id + 1.
  genId(projects: Project[]): number {
    return projects.length > 0
      ? Math.max(...projects.map((project) => project.id)) + 1
      : 11;
  }
}
