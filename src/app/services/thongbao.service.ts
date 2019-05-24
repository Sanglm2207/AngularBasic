import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlAPI = 'http://5ca73f878e58df0014602f41.mockapi.io/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlAPI}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(this.urlAPI, product);
  }

  deleteProduct(product): Observable<Product>{
    return this.http.delete<Product>(`${this.urlAPI}/${product.id}`)
  }

  getProduct(id): Observable<Product>{
      return this.http.get<Product>(`${this.urlAPI}/${id}`);
  }

  editProduct(product): Observable<Product>{
      return this.http.put<Product>(`${this.urlAPI}/${product.id}`, product)
  }



}







