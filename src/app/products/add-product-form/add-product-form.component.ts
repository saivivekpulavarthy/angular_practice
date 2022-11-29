import { _YAxis } from '@angular/cdk/scrolling';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../products.model';
import { DisplayProductsComponent } from '../display-products/display-products.component';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  productForm!: FormGroup;
  actionBtn: string = 'Save';

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: Product, private api: ApiService, private _snackBar: MatSnackBar) { }

  freshnessList = ["Brand New", "Second Hand", "Refurbished"]
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      availability: ['available', Validators.required],
      comment: ['']
    })

    if (this.editData) {
      this.actionBtn = 'Update'
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['availability'].setValue(this.editData.availability);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
    }
  }

  addProduct() {
    if (!this.editData) {
      this.api.postProducts(this.productForm.value).subscribe({
        next: (res) => {
          this._snackBar.open(res.productName + " is added successfully :)", "", {

          });
          this.api.refreshProductsList.emit();
        }, error: (err) => {
          this._snackBar.open(err.status + " Error Please try again.", "", {
          })
        }
      })
    } else {
      this.api.updateProduct(this.editData.id, this.productForm.value).subscribe({
        next: (res) => {
          this._snackBar.open(res.productName + " is Updated successfully :)");
        }, error: (err) => {
          this._snackBar.open(err.status + " Not Updated Please try again.");
        }
      })
    }
  }
}
