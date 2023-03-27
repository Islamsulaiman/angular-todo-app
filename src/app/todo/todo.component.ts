import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';
import { TodosService } from '../services/todos.service';
import { Todo } from './todoType';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {

  inOrNot : Todo | undefined  ;

  constructor( private _todoService: TodosService, private _login: LoginService, private _http:HttpService){}

  nums : number[] = [1,2,3,4]

  todos: Todo[] = this._todoService.allTodos
  todoCount: number = 0

  todosFav : Todo[] = []
  favTodoCount: number = 0

  todosDeleted : Todo [] = []
  deletedTodoCount: number = 0

  todosCompleted : Todo[] = []
  completedTodoCount: number = 0


  ngOnInit(): void {}

  name : String |undefined|null = this._login.email

  // main functions

  // todo name
  newTodo: string | undefined;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.title = this.newTodo;
      todo.completed = false;
      todo.favorite = false;
      todo.deleted = false

      this.newTodo = "";  //

      this._todoService.allTodos.push(todo)

      console.log("from the http reguest")
      console.log( this._http.getAllUsers())

      this.todoCountFunc()

    }else{
      alert("please enter a todo")
    }
  }



  addTodoToFav(id:number){

    if(!this.todos[id].favorite ){

      this.todos[id].favorite = true  //change its state
      this._todoService.allTodos[id].favorite = true

    }else{

      this.todos[id].favorite = false  //change its state
      this._todoService.allTodos[id].favorite = false

    }
  }


  fineshed(id:number){
    
    if(!this.todos[id].completed){

      //if todo is not done
      this.todos[id].completed = true  //change its state   
      this._todoService.allTodos[id].completed = true

    }else{

      // if todo id already made done, and we want to bring it back
      this.todos[id].completed = false  //change its state
      this._todoService.allTodos[id].completed = false
    }
  }


  remove(id:number){

    this._todoService.todosDeleted.push(this.todos[id])
    this._todoService.allTodos.splice(id,1)

  }

  // utilities
  todoCountFunc(){
    this.todoCount = this.todos.length-1
  }

}

