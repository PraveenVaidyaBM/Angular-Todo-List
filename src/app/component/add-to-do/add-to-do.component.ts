import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any>= new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit(): void {
  }
  // function which fetch get title as soon as user cick submit button
  onSubmit(){
    const todo={
      title:this.title,
      completed:false
    }
    this.addTodo.emit(todo);
  }
}