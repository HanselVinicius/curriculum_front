import { Component } from '@angular/core';
import Project from 'src/app/model/projects/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  public projects: Project[] = [];

}
