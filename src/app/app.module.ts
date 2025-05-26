import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Import RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanceComponent } from './distance/distance.component';

import { FormsComponent } from './forms/forms.component';
 import {MatButtonModule} from '@angular/material/button';
import{MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ComponentNameComponent } from './component-name/component-name.component';
import { Form2Component } from './form2/form2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
//import { ScreenComponent } from './screen/screen.component';


@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    HomeComponent,
    DistanceComponent,
    FormsComponent,
    PageComponent,
    ComponentNameComponent,
    Form2Component,
    AboutComponent,
    ContactComponent,
    SignInComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatDatepickerModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatNativeDateModule,MatSelectModule,MatToolbarModule,ReactiveFormsModule,HttpClientModule,
    MatCardModule , RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
