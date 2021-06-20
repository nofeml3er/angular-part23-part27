import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ProductComponent } from './product/product.component'; //lab1
// import { ProductItemComponent } from './product-item/product-item.component'; //lab1
// import { ProductListComponent } from './product-list/product-list.component'; //lab1
import { FormsModule } from '@angular/forms';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // ProductComponent, //lab1
    // ProductItemComponent, //lab1
    // ProductListComponent, //lab1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalogModule,
    HomeModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
