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
  ngOnInit(): void {
    console.log("inside Tod ")
  }

  todos: Todo[] = []

  constructor(private observable:LoginService){

  }


  // todo name
  newTodo: string | undefined;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.title = this.newTodo;
      todo.completed = false;
      this.todos.push(todo);
      this.newTodo = "";

      // this.observable.pushObservable();      

    }else{
      alert("please enter a todo")
    }
  }


  fineshed(id:number){
    this.todos[id].completed = !this.todos[id].completed
  }

  remove(id:number){
    this.todos.splice(id,1)
  }

}

