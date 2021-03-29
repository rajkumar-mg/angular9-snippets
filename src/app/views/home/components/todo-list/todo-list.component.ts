import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  addTodoText: string;
  todoList: Array<any> = [
    {
      task: 'Task 1',
      complete: true
    },
    {
      task: 'Task 2',
      complete: false
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  /**
  *
  * @description
  * metho to observe checkbox change event
  *
  */
  checkboxChange(event, index) {
    this.todoList[index].complete = event.checked;
  }

  /**
   * 
   * @description
   * metho to add new elements in to-do list
   * 
   */
  addToDo() {
    if (!this.addTodoText) return;
    this.todoList.push({
      task: this.addTodoText,
      complete: false
    });
    this.addTodoText = '';
  }

  /**
   * 
   * @description
   * metho to remove elements from to-do list
   * 
   */
  removeTodo(index) {
    this.todoList.splice(index, 1);
  }


}
