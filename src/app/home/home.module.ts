import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { CatalogModule } from '../catalog/catalog.module';
// import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MaincontentComponent,
    // HomeComponent,
  ],
  imports: [
    CommonModule,
    CatalogModule
  ],
  exports: [
    NavbarComponent,
    MaincontentComponent,
    // HomeComponent
  ]
})
export class HomeModule { }

