import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
