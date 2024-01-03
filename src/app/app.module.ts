import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from './components/personal_info/personal-info/personal-info.component'
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInfoComponent,
    
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    LoginDialogComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
