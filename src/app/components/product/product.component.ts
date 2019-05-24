import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/thongbao.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      return this.products = data;
    });
  }

   showDetail(product) {
  //this.selected = product;
   }

   deleteItem(product) {

    this.productService.deleteProduct(product).subscribe(data => {
        return this.products = this.products.filter(item => item.id !== data.id)
    })
  }
}
