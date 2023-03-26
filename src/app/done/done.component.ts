import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todo/todoType';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {

  completedTodo :Todo[] = []

  constructor(private _todoService: TodosService){
    this.completedTodo = this._todoService.todosCompleted
    console.log(this.completedTodo)
  }

}
