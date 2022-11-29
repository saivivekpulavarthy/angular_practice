import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
  }
  refreshProductsList = new EventEmitter();

  postProducts(data: Product) {
    return this.http.post<Product>("http://localhost:3000/productsList", data)
  }
  getProductsList() {
    return this.http.get<Product[]>("http://localhost:3000/productsList");
  }
  updateProduct(id: number, data: Product) {
    return this.http.put<Product>("http://localhost:3000/productsList/" + id, data);
  }
  deleteProduct(id: number) {
    return this.http.delete("http://localhost:3000/productsList/" + id);
  }
  private subject = new Subject<any>();
}

