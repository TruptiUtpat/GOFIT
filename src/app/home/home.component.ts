import { Component } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';
import { MatDialog } from '@angular/material/dialog';
import { PageComponent } from '../page/page.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imagePath = 'assets/work.jpg';
  imagePath1 = 'assets/gofit5.jpg';
  imagePath2 ='assets/yoga.avif';
  imagePath3 ='assets/fruit1.jpg';

  constructor(private dialog:MatDialog){}

  openForm(){
    this.dialog.open(FormsComponent)
    
  }

  openPage(){
    this.dialog.open(PageComponent)
  }

}
