import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged:boolean = false;

  constructor(private matDialog:MatDialog,private authService:AuthService,private toast:NgToastService){
  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();
  }

   public loginClick(){
      this.matDialog.open(LoginDialogComponent).afterClosed().subscribe(result => {
        this.authService.login(result,this.successCallback.bind(this),this.errorCallback.bind(this));
      }); 
   }

   public successCallback(){
      this.toast.success({detail:"OK",summary:'Login realizado com sucesso',sticky:false, position:'topRight'});
   }

   public errorCallback(error:any){
      this.toast.error({detail:"ERRO",summary:'Falha ao executar login',sticky:false, position:'topRight'});

  }
}
