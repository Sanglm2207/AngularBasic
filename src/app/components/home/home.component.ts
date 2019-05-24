import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../model/product';
import { DataProduct } from '../../model/MockProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = DataProduct;
  selected: Product;
  constructor() { }

  ngOnInit() {
  }
  
}
