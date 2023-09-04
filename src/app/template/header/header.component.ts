import { Component, OnInit } from '@angular/core';
import * as confetti from 'canvas-confetti';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // variable to hold the state of the checkbox
  isDarkMode: boolean = false;

  ngOnInit() {
    // Initialize the checkbox based on current theme
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode; // invertir el valor
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    const htmlClassList = document.documentElement.classList;
    htmlClassList.remove('dark', 'light');
    htmlClassList.add(this.isDarkMode ? 'dark' : 'light');
  }

  launchConfetti() {
    const canvasElem = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvasElem) {
      confetti.create(canvasElem, {
        resize: true,
        useWorker: true,
      })({
        particleCount: 100,
        spread: 200,
        angle : -90,
        origin: { y: 0.001, x: 0.5 },
        zIndex: 9999,
        shapes: ['circle', 'square','star'],
        ticks: 600,
      });
      
    }
  }
}
