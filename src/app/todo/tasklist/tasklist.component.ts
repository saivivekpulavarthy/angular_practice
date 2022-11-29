import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  @ViewChild('title') title?: ElementRef;
  pendingTasks!: any;
  todos: Todo[] = [
    {
      id: 1,
      title: 'Eating',
      complete: true,
    },
    {
      id: 2,
      title: 'Sleep',
      complete: false,
    },
  ];
  constructor(
    public todoService: TodoService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos();
  }
  markIt(data: boolean, todo: Todo) {
    todo.complete = data;
    this.todoService.update(todo.id, todo).subscribe((d) => {
      if (data) this._snackBar.open('Marked as Completed:)');
      this.todoService.getTodos();
    });
  }
  removeTask(id: number) {
    this.todoService.remove(id).subscribe((d) => {
      this._snackBar.open('Removed Succesfully :)');
      this.todoService.getTodos();
    });
  }
  addTask(data: string) {
    let todo = {
      title: data,
      complete: false,
    };
    this.todoService.addTodo(todo).subscribe(() => {
      this._snackBar.open('Task Added Succesfully :)');
      this.todoService.getTodos();
    });
    this.title!.nativeElement.value = '';
  }
}
