import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  windowWidth: string = '';  // Initialize as an empty string
  showSplash = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // Set window width with a negative pixel value
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        // Hide the splash screen after 500ms
        this.showSplash = false;
      }, 500);
    }, 3000);  // Start the splash screen transition after 3 seconds
  }
}
