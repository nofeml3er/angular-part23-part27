import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent) //ViewChildren
  productItems: QueryList<ProductItemComponent>; //ViewChildren

  products: Product[];

  constructor() { 
    // this.products = [];
    // this.products.push({
    //   name: "item1",
    //   price: 100
    // });
    // this.products.push({
    //   name: "item2",
    //   price: 150
    // });
    // this.products.push({
    //   name: "item3",
    //   price: 199
    // });
    // this.products.push({
    //   name: "item4",
    //   price: 359
    // }); //เดิม
  }

  ngOnInit(): void {
  }

  // selectedProduct(product : Product) {
  //   alert (`Product $(product.name) selected`);
  // } //เดิม

  selectedProduct(product : ProductItemComponent) {
    alert (`Product ${product.product.name} selected`);
    this.productItems.forEach(p => (p.isSelected = false));
    product.isSelected = true;
  } //ViewChildren

}

