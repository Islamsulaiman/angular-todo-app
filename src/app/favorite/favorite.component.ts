import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todo/todoType';


allTodos: Todo  ;
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{

  constructor(private _todos: TodosService){}

  

  ngOnInit(): void {
    // this.allTodos = this._todos.getTodos()

    // this.allTodos = this._todos.allTodos
    this._todos.getTodos()

    // let allTodos: Todo = this._todos.currentMessage.subscribe(message => allTodos = message)

    console.log(this._todos.oneTodo)
  }


}
