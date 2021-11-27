import { Component, OnInit } from '@angular/core';
import {ProductCategory} from "../../common/product-category";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-catagory-menu',
  templateUrl: './product-catagory-menu.component.html',
  styleUrls: ['./product-catagory-menu.component.css']
})
export class ProductCatagoryMenuComponent implements OnInit {

  productCategories: ProductCategory[];

  constructor(private  productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories = ' + JSON.stringify(data));
        this.productCategories = data;
      }
    );

  }
}
