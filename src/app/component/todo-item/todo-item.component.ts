import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;
@Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(
  private todoService:TodoService
  ) { }

  ngOnInit(): void {
  }

// setting dynamic classes for list items
  setClasses(){
    let classes={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
}

onToggle(todo){
  // toggle in UI
  todo.completed=!this.todo.completed;
  // toggle in server
  this.todoService.toggleCompletd(todo).subscribe(todo=>
    console.log(todo)
  )
}
// function for deleting the todo
onDelete(todo){
  this.deleteTodo.emit(todo);
}
}