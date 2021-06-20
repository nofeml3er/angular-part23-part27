import { Injectable } from '@angular/core';
import { Product } from './catalog/product'; //lab2
// import { Product } from './product/product'; //lab1

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor() { }

  //lab1
  // getProducts() : Product[] {
  //   return[
  //     {
  //       name: "samsung",
  //       price: 455
  //     },
  //     {
  //       name: "huawei",
  //       price: 564
  //     },
  //     {
  //       name: "vivo",
  //       price: 523
  //     }
  //   ];
  // }

  //lab2
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