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

  constructor( private _todoService: TodosService, private _login: LoginService, private _http:HttpService){
    // this._todoService.allTodos = this.todos
    // this.todos = this._todoService.allTodos
  }

  nums : number[] = [1,2,3,4]

  todos: Todo[] = this._todoService.allTodos
  todoCount: number = 0

  todosFav : Todo[] = []
  favTodoCount: number = 0

  todosDeleted : Todo [] = []
  deletedTodoCount: number = 0

  todosCompleted : Todo[] = []
  completedTodoCount: number = 0


  ngOnInit(): void {
    // console.log(this._todoService.allTodos)
    // this.todos = this._todoService.allTodos
  }


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


      // this.todos.push(todo); //


      this.newTodo = "";  //

      // this._todoService.allTodos = this.todos
      this._todoService.allTodos.push(todo)

      console.log("from the http reguest")
      console.log( this._http.getAllUsers())

      // this._todoService.onSubmit(todo)
      this.todoCountFunc()


    }else{
      alert("please enter a todo")
    }
  }



  addTodoToFav(id:number){

    // this.inOrNot  = this.todos.fin(todo => todo.title === this.todos[id].title)

    if(!this.todos[id].favorite ){

      this.todos[id].favorite = !this.todos[id].favorite  //change its state
      this._todoService.todoFavObj[id] = this._todoService.todosFav.length

      console.log(this._todoService.todoFavObj)

      this._todoService.todosFav.push(this.todos[id])
      console.log("false in fav")

    }else{

      this.todos[id].favorite = !this.todos[id].favorite  //change its state
      this._todoService.todosFav.splice(this._todoService.todoFavObj[id] ,1)
      console.log("true in fav")

    }
  }

  addToDeleted(id:number){
    if(!this.todos[id].deleted ){

      // this.todosDeleted.push(this.todos[id])  //
      this.todos[id].deleted = true

      this._todoService.todosDeleted.push(this.todos[id])

    }
  }

  fineshed(id:number){
    
    if(!this.todos[id].completed){

      //if todo is not done
      this.todos[id].completed = !this.todos[id].completed  //change its state   
      this._todoService.todosCompleted.push(this.todos[id])

    }else{

      // if todo id already made done, and we want to bring it back
      this.todos[id].completed = !this.todos[id].completed  //change its state
      this._todoService.todosCompleted.splice(id,1)
    }
  }

  remove(id:number){
    if(this.todos[id].favorite) this._todoService.todosFav.splice(id,1) //remove favorite
    this.addToDeleted(id)
    this.todos.splice(id,1)
  }




  // utilities
  todoCountFunc(){
    this.todoCount = this.todos.length-1
  }



}

