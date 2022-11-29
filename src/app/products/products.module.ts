import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProdHomeComponent } from './prod-home-component/prod-home-component.component';
import { SharedModule } from '../common/shared/shared.module';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { DisplayProductsComponent } from './display-products/display-products.component';
@NgModule({
  declarations: [ProdHomeComponent, AddProductFormComponent, DisplayProductsComponent ],
  imports: [
    CommonModule, ProductsRoutingModule, SharedModule, ReactiveFormsModule, HttpClientModule
  ],
 providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},ApiService
  ]
})
export class ProductsModule { }
