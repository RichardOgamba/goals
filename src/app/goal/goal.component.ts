import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goal(2, 'Buying Cookies', 'I have to buy cookies for the parrot'),
    new Goal(3, 'Get New Phone Case', 'Diana has her birthday coming up soon'),
    new Goal(4, 'Get Dog Food', 'Pupper likes expesive snacks'),
    new Goal(5, 'Solve Math Homework', 'Damn math'),
    new Goal(6, 'Plot My World Domination Plan', 'Cause I am an evil Overlord'),

  ]

  toogleDetails(index){
    this.goals[index].showDescription = !this.goal[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
