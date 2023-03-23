import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../services/login.service';
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

  todos: Todo[] = []

  todosFav : Todo[] = []

  todosDeleted : Todo [] = []

  todosCompleted : Todo[] = []

  

  constructor(private observable:LoginService){

  }


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

      // this.observable.pushObservable();      

    }else{
      alert("please enter a todo")
    }
  }

  addTodoToFav(id:number){

    // this.inOrNot  = this.todos.fin(todo => todo.title === this.todos[id].title)

    if(!this.todos[id].favorite ){

      this.todosFav.push(this.todos[id])
      this.todos[id].favorite = true
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

  // addToCompleted(id:number){
  //   if(!this.todos[id].completed ){

  //     this.todosCompleted.push(this.todos[id])
  //     this.todos[id].completed = true
  //   }
  //   console.log(this.todosDeleted);
  // }

  fineshed(id:number){
    
    this.todos[id].completed = !this.todos[id].completed
    // this.addToCompleted(id)
  }

  remove(id:number){
    this.addToDeleted(id)
    this.todos.splice(id,1)
  }

}

