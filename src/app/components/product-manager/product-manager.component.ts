import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/thongbao.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      return this.products = data;
    });
  }

 

   deleteItem(product) {
    this.productService.deleteProduct(product).subscribe(data => {
        return this.products = this.products.filter(item => item.id !== data.id)
    })
  }

}
