import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son', new Date(2018,3,14) ),
    new Goal(2, 'Buying Cookies', 'I have to buy cookies for the parrot', new Date(2018,6,9) ),
    new Goal(3, 'Get New Phone Case', 'Diana has her birthday coming up soon', new Date(2018,1,12) ),
    new Goal(4, 'Get Dog Food', 'Pupper likes expesive snacks', new Date(2018,0,18) ),
    new Goal(5, 'Solve Math Homework', 'Damn math', new Date(2081,2,14) ),
    new Goal(6, 'Plot My World Domination Plan', 'Cause I am an evil Overlord', new Date(2018,3,14) ),

  ]

  deleteGoal(isComplete,index) {
    if(isComplete) {
      let toDelete = confirm('Are you sure you want to delete ${this.goals[index].name}')

      if(toDelete) {
        this.goals.splice(index,1);
      }
    }
  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id=goalLength +1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
