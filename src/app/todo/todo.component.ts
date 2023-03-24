import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  ngOnInit(): void {
    console.log("inside Tod ")
  }

  nums : number[] = [1,2,3,4]

  todos: Todo[] = []
  todoCount: number = 0

  todosFav : Todo[] = []
  favTodoCount: number = 0

  todosDeleted : Todo [] = []
  deletedTodoCount: number = 0

  todosCompleted : Todo[] = []
  completedTodoCount: number = 0

  

  constructor( private _todoService: TodosService){}



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
      this.todos.push(todo);
      this.newTodo = "";

      this._todoService.onSubmit(todo)
      this.todoCountFunc()


    }else{
      alert("please enter a todo")
    }
  }



  addTodoToFav(id:number){

    // this.inOrNot  = this.todos.fin(todo => todo.title === this.todos[id].title)

    if(!this.todos[id].favorite ){

      this.todosFav.push(this.todos[id])
      this.todos[id].favorite = true

      // this.service.changeData(this.todos)
    }
    console.log(this.todosFav);
  }

  addToDeleted(id:number){
    if(!this.todos[id].deleted ){

      this.todosDeleted.push(this.todos[id])
      this.todos[id].deleted = true
    }
    console.log(this.todosDeleted);
  }

  fineshed(id:number){
    
    this.todos[id].completed = !this.todos[id].completed
    // this.addToCompleted(id)
  }

  remove(id:number){
    this.addToDeleted(id)
    this.todos.splice(id,1)
  }





  // utilities
  todoCountFunc(){
    this.todoCount = this.todos.length-1
  }



}

