import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}
  private subject = new BehaviorSubject<Todo[]>([]);
  public obs = this.subject.asObservable();

  public completedTasks = this.obs.pipe(
    map((v1) => v1.filter((v) => v.complete === true))
  );
  public pendingTasks = this.obs.pipe(
    map((v1) => v1.filter((v) => v.complete === false))
  );

  getTodos() {
    this.httpClient
      .get<Todo[]>('http://localhost:3000/todos')
      .subscribe((data) => {
        this.subject.next(data);
      });
  }
  addTodo(todo: any) {
    return this.httpClient.post('http://localhost:3000/todos', todo);
  }
  update(todoId: number, todo: Todo) {
    return this.httpClient.put('http://localhost:3000/todos/' + todoId, todo);
  }
  remove(id: number) {
    return this.httpClient.delete('http://localhost:3000/todos/' + id);
  }
}
