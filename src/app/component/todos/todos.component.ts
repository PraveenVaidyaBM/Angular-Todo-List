import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(
    private todoService:TodoService
  ) { }

  ngOnInit(): void {
    // to get the todo data from to frontend
    this.todoService.getTodos().subscribe(todos =>{
      this.todos= todos
    });
  }
  // deleting todo from UI
  deleteTodo(todo:Todo){
      this.todos= this.todos.filter(t=>t.id!=todo.id);
      this.todoService.deleteTodo(todo).subscribe();
  }
  // add to do list
  addTodo(todo:Todo){
    this.todoService.addTodO(todo).subscribe(todo =>{
      this.todos.push(todo);
    });
  }
}
