import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todo/todoType';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{


  allTodos : Todo[] = [];
  favTodos : Todo[] =[]


  constructor( private _todoService: TodosService){

    this.allTodos = this._todoService.allTodos

    for(let i =0; i<this.allTodos.length; i++){
      if(this.allTodos[i].favorite===true){
        this.favTodos.push(this.allTodos[i])
      }
    }
    
  }

  

  ngOnInit(): void {

    // console.log(this .todos[0].title)
    // this.allTodos = this._todos.getTodos()

    // this.allTodos = this._todos.allTodos
    // this._todos.getTodos()

    // let allTodos: Todo = this._todos.currentMessage.subscribe(message => allTodos = message)

    // console.log(this._todos.oneTodo)
  }


}
