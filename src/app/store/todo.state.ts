import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { TodoModel, TodoStateModel } from './todo-state.model';
import { AddTodo, RemoveTodo } from './todo.actions';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TodoState {
  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    console.log('state', state);
    const newItem: TodoModel = {
      id: state.items.length + 1,
      title: action.title,
      isActive: true,
    };

    ctx.setState({
      ...state,
      items: [...state.items, newItem],
    });
  }

  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter((item) => item.id !== action.todoItem.id),
    });
  }
}
