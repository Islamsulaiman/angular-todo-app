import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../todo/todoType';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  allTodos: Todo []=[];






  todosFav : Todo[] = []
  todoFavObj : any = {} //to link between todo id in todo comp and id in fav comp {"todoComp:FavComp"}
  favTodoCount: number = 0

  todosDeleted : Todo [] = []
  deletedTodoCount: number = 0

  todosCompleted : Todo[] = []
  completedTodoCount: number = 0


  constructor() {}


// oneTodo: Todo[] =[{
//   id: 1,
//   title: "hello",
//   completed: true,
//   deleted: false,
//   favorite: true,
//   userId: 11111
// }]

// aTodo : Todo = {
//   id: 1,
//   title: "hello",
//   completed: true,
//   deleted: false,
//   favorite: true,
//   userId: 11111
// }



// private messageSource = new BehaviorSubject(this.aTodo);
// currentMessage = this.messageSource.asObservable();


  onSubmit(newTodo:Todo){
    let todo = new Todo();
    todo.title = newTodo.title
    todo.completed = newTodo.completed
    todo.deleted = newTodo.deleted
    todo.favorite = newTodo.favorite

    if(newTodo.completed){
      this.todosCompleted.push(todo)

    }else if(newTodo.deleted){
      this.todosDeleted.push(todo)
    }
    else if(newTodo.favorite){
      this.todosFav.push(todo)
    }
    this.allTodos.push(newTodo);

  }

  getTodos(){
    // return this.allTodos
    // this.messageSource.next(this.aTodo)
  }



}
