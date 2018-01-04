import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  goals = [
    new Goal(1, 'Watch Finding Nemo'),
    new Goal(2, 'Buying Cookies'),
    new Goal(3, 'Get New Phone Case'),
    new Goal(4, 'Get Dog Food'),
    new Goal(5, 'Solve Math Homework'),
    new Goal(6, 'Plot My World Domination Plan'),

  ]
}
