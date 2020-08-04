import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

// for http requests
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

// injecting service to root component
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // assigning external url to an an object
  todosUrl:string='https://jsonplaceholder.typicode.com/todos';
  todosLimit='?_limit=7';

  constructor(
    private http:HttpClient,
    
  ) { }

  // to get todos list
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //toggle comleted
  toggleCompletd(todo:Todo):Observable<any>{
    const url=`${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // adding new Todo to the list
  addTodO(todo:Todo):Observable<any>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions); 
  }

  // deleting todo from browser
  deleteTodo(todo:Todo):Observable<Todo>{
    const url=`${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions)
  }
}
