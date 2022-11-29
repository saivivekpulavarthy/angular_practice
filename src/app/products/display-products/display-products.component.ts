import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { from, Observable } from 'rxjs';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { ApiService } from '../api.service';
import { Product } from '../products.model';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['productName', 'category', 'freshness', 'date',
    'price', 'availability', 'comment', 'action'];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  value:Number[]=[1,2,3,4,5];
  constructor(private api: ApiService, private dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.api.refreshProductsList.subscribe((data) => {
      console.log('emitter');
      this.getAllProducts();
    });
  }
  firstObs=from(this.value);
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.api.getProductsList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error: (err) => {
        console.log(err);
      },complete:()=>{
        console.log("Completed subscribe");
      },
    })
  }

  applyFilter(event: string) {
    //const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = event.trim().toLowerCase();
    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }

  onEdit(row: any) {
    this.dialog.open(AddProductFormComponent, {
      width: '30%',
      data: row,
    }).afterClosed().subscribe((val) => {
      this.getAllProducts();
    })
  }

  onDelete(row: Product) {
    this.api.deleteProduct(row.id).subscribe({
      next: (res) => {
        this._snackBar.open("Deleted Succesfully :)");
        this.getAllProducts();
      }
    })
  }
  ngAfterViewInit() {
   // this.getAllProducts();
  }
}
