import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Project from 'src/app/model/projects/Project';
import TecnologiaVo from 'src/app/model/projects/TecnologiaVo';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];
  
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().then((projects:Project[])=>{
      this.projects = projects;
    });
    let testProject: Project = {
        id: 1,
        name: "test",
        description: "test",
        link: "test",
        technologies: [new TecnologiaVo(1, "test", 1)]
    }
      this.projects.push(testProject);
  }

 

}
