import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdHomeComponent } from "./prod-home-component/prod-home-component.component";

const routes:Routes=[

{
    path:'',
    component:ProdHomeComponent
},

]
@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})

export class ProductsRoutingModule{}