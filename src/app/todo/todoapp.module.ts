import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../common/shared/shared.module";
import { TasklistComponent } from "./tasklist/tasklist.component";
import { TodoService } from "./todo.service";
import { TodoTaskComponent } from './todo-task/todo-task.component';
const root = [{
    path: '',
    component: TasklistComponent
}]
@NgModule({
    declarations: [TasklistComponent, TodoTaskComponent],
    imports: [SharedModule, HttpClientModule, RouterModule.forChild(root), CommonModule],
    exports: [],
    providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }, TodoService,]

})

export class TodoappModule {

}
