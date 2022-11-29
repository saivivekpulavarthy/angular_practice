import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectService } from 'src/app/subject.service';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { ApiService } from '../api.service';
import { DisplayProductsComponent } from '../display-products/display-products.component';

@Component({
  selector: 'app-prod-home-component',
  templateUrl: './prod-home-component.component.html',
  styleUrls: ['./prod-home-component.component.scss']
})
export class ProdHomeComponent implements OnInit {
  // @ViewChild('app-display-products')
  // displayProducts!: DisplayProductsComponent;
  constructor(private dialog: MatDialog, private api: ApiService, private subjectService: SubjectService) { }
  ourData: any[] = [];
  ngOnInit(): void {
  }
  addProduct() {
    this.dialog.open(AddProductFormComponent, {
      width: '30%'
    })
  }



}
