import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import User from 'src/app/model/User';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  standalone:true,
  imports: [MatButtonModule,MatDialogModule,FormsModule]
})
export class LoginDialogComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>){}
  public username:String = '';
  public password:String = '';


  ngOnInit(): void {
    
  }

  public onConfirm(): void {
    let user:User = {login:this.username,password:this.password};
    this.dialogRef.close(user);
  }
}
