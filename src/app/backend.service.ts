import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts() : Product[] {
    return[
      {
        name: "samsung",
        price: 455
      },
      {
        name: "huawei",
        price: 564
      },
      {
        name: "vivo",
        price: 523
      }
    ];
  }

  getProductById(productId: number) : Product {
    return;
  }
}