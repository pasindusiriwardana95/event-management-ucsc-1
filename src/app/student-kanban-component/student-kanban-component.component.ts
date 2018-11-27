import { Component, OnInit } from '@angular/core';
import { TaskCard } from './stuent-kanban-component.model';

@Component({
  selector: 'app-student-kanban-component',
  templateUrl: './student-kanban-component.component.html',
  styleUrls: ['./student-kanban-component.component.css']
})
export class StudentKanbanComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  TODO = 1;
  INPROCESS = 2;
  DONE = 3;


  // task list 
  toDo: TaskCard[] = [
    new TaskCard(this.TODO, 'This is a test of kanban'),
    new TaskCard(this.TODO, 'This is a second test'),
    new TaskCard(this.TODO, 'This is a third test')
  ];

  // process task list
  inProcess = [];
  // done task list
  done = [];

  onEnter(inputtext) {
    if (inputtext.value != '') {
      this.toDo.push(new TaskCard(this.TODO, inputtext.value))
    }
    inputtext.value = null;
  }


  onItemDrop(e: any) {
    // Get the dropped data here
    console.log(e.dragData)
    const index: number = this.toDo.indexOf(e.dragData);
    if (index !== -1) {
      e.dragData.column = this.INPROCESS;
      this.toDo.splice(index, 1);
      this.inProcess.push(e.dragData);
      console.log("added to process" + e.dragData)
    }
  }

  onItemDrop2(e: any) {
    // Get the dropped data here
    const index: number = this.inProcess.indexOf(e.dragData);
    if (index !== -1) {
      e.dragData.column = this.DONE;
      this.inProcess.splice(index, 1);
      this.done.push(e.dragData);
      console.log("completed" + e.dragData)
    }

  }

}
