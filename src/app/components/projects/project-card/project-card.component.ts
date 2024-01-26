import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Project from 'src/app/model/projects/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  public project!: Project; 


  ngOnInit(): void {
    
  }

  
}
