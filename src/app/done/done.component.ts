import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todo/todoType';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent {

  allTodos :Todo[] = []
  completedTodo :Todo[] = []

  constructor(private _todoService: TodosService){


    this.allTodos = this._todoService.allTodos

    for(let i =0; i<this.allTodos.length; i++){
      if(this.allTodos[i].completed === true){
        this.completedTodo.push(this.allTodos[i])
      }
    }


    console.log(this.completedTodo)


  }

}
