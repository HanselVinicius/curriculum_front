import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  standalone:true,
  imports: []
})
export class LoginDialogComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>){}

  ngOnInit(): void {
    
  }

  public onConfirm(): void {
  }
}
