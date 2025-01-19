import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { createSelector } from '@ngxs/store';
import { AddTodo, RemoveTodo } from './store/todo.actions';
import { TodoSelectors } from './store/todo.selector';
import { Observable } from 'rxjs';
import { TodoModel } from './store/todo-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  items$: Observable<TodoModel[]> = this.store.select(createSelector([TodoSelectors.items], (items) => items));

  activeItems$: Observable<TodoModel[]> = this.store.select(createSelector([TodoSelectors.activeItems], (activeItems) => activeItems));

  @Select(TodoSelectors.doneItems)
  doneItems$: Observable<TodoModel[]> | undefined;

  newTitle: string = '';

  constructor(private store: Store) {}

  add(todo: string){
    this.store.dispatch(new AddTodo(todo));
    this.newTitle = '';
  }

  remove(todo: TodoModel){
    this.store.dispatch(new RemoveTodo(todo));
  }
}
