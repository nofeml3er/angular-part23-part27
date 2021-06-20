import { Component, ViewChild, OnInit} from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './catalog/product-list/product-list.component';
// import { ProductListComponent } from './product-list/product-list.component'; //lab1

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-part23-part27';

  // @ViewChild('productList', {static : true}) //ViewChild
  // // productList: ProductListComponent; //ViewChild lab1
  // productList: ProductListComponent; //ViewChild lab2
  
  ngOnInit() : void {
    // this.productList.products = [
    //   {
    //     name: "samsung",
    //     price: 455
    //   },
    //   {
    //     name: "huawei",
    //     price: 564
    //   },
    //   {
    //     name: "vivo",
    //     price: 523
    //   }
    // ]; //ViewChild
    // this.productList.products = this.backendService.getProducts();
  }
  // constructor(private backendService: BackendService){
    
  // }
  constructor(){ }
  
}