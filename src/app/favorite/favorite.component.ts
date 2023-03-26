import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo/todoType';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{


  todos : Todo [] = [];

  constructor( private _todoService: TodosService){

    // this.todos = this._todos.allTodos
    this.todos = this._todoService.allTodos
    console.log(this.todos)
  
    // console.log(this.todos)

  }

  

  ngOnInit(): void {

    console.log(this.todos)
    // this.allTodos = this._todos.getTodos()

    // this.allTodos = this._todos.allTodos
    // this._todos.getTodos()

    // let allTodos: Todo = this._todos.currentMessage.subscribe(message => allTodos = message)

    // console.log(this._todos.oneTodo)
  }


}
