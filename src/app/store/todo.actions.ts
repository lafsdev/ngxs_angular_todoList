import { TodoModel } from './todo-state.model';

export class AddTodo {
  static readonly type = '[Todo] Add Todo';
  constructor(public title: string) {
    console.log('title:', title);
  }
}

export class RemoveTodo {
  static readonly type = '[Todo] Remove Todo';
  constructor(public todoItem: TodoModel) {}
}
