import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private matDialog:MatDialog){}

   public loginClick(){
      this.matDialog.open(LoginDialogComponent).afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
      
   }

}
