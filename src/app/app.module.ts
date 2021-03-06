import { TodosComponent } from './component/todos/todos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/layout/header/header.component';
import { AddToDoComponent } from './component/add-to-do/add-to-do.component';
import { FormsModule} from '@angular/forms';
import { AboutComponent } from './component/pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddToDoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
