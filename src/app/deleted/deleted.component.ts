import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../todo/todoType';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit{

  // allTodos : Todo[] = []

  deletedTodos: Todo [] = []              

  constructor(private _todoService: TodosService){

    this.deletedTodos = this._todoService.todosDeleted

  //   for(let i =0; i<this.allTodos.length; i++){
  //     if(this.allTodos[i].deleted===true){
  //       this.deletedTodos.push(this.allTodos[i])
  //     }
  //   }

  }

  ngOnInit(): void {
  }
}
