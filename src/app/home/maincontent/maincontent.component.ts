import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { ProductListComponent } from 'src/app/catalog/product-list/product-list.component';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  title = 'angular-part23-part27';

  @ViewChild('productList', {static : true}) //ViewChild
  // productList: ProductListComponent; //ViewChild lab1
  productList: ProductListComponent; //ViewChild lab2
  

  ngOnInit(): void {
    this.productList.products = this.backendService.getProducts();
  }
  constructor(private backendService: BackendService){

  }

}
