import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../todo/todoType';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  allTodos: Todo []=[];

  todosDeleted : Todo [] = []
  todosFav : Todo[] = []

  deletedTodoCount: number = 0
  favTodoCount: number = 0

  constructor() {}

  getTodos(){}

}
