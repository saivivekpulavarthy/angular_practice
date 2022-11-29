import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss'],
})
export class TodoTaskComponent implements OnInit {
  @Input('todo')
  todo!: Todo;
  @Output('completed')
  completed = new EventEmitter();
  @Output('remove')removeTask=new EventEmitter();

  onRemoveTask(id:number){
    this.removeTask.emit(id);
  }
  constructor() {}
  onChange(value: any){
    this.completed.emit(value.target.checked);
  }
  ngOnInit(): void {}
}
