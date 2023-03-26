import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo/todoType';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit{

  deletedTodos: Todo [] = []              

  constructor(private _todoService: TodosService){
    this.deletedTodos = this._todoService.todosDeleted
  }

  ngOnInit(): void {
  }
}
