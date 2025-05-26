import { Component } from '@angular/core';
import { Form2Component } from '../form2/form2.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  constructor(private dialog:MatDialog){}

  openForm(){
    
    this.dialog.open(Form2Component)
    
  }

}
