import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-website';
  componentUrl = 'http://localhost:5000/main-es2015.js';

  onAnswer(event) {
    const { answer } = event.detail;
    if (answer === undefined) {
      throw new Error('shouldn\'t happen');
    }
    if (answer === '') {
      window.alert(`User didn't say anything.`);
    }
    else {
      window.alert(`User said: ${answer}`);
    }
  }
}
