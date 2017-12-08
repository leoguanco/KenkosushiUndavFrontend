import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../class/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public errorMessage;
  public products: Array<Product>;
  public product: Product;
  public productList=false;
  public filter: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  addProduct() {
    const data = {
      name: this.product.name,
      type: this.product.type,
      image: this.product.image,
      description: this.product.description,
      price: this.product.price,
      marketable: this.product.marketable,
      amountPeople: this.product.amountPeople
    };

    this.productService.addProduct(data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  updateProduct(item) {
    const data = {
      name: this.product.name,
      type: this.product.type,
      image: this.product.image,
      description: this.product.description,
      price: this.product.price,
      marketable: this.product.marketable,
      amountPeople: this.product.amountPeople
    };

    this.productService.updateProduct(item.id, data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  deleteProduct(item) {
    this.productService.deleteProduct(item.id)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getAllProduct() {
    this.productService.getAllProduct()
      .subscribe(
        response => {
          console.log(response);
          this.products = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getProduct(item) {
    this.productService.getProduct(item.id)
      .subscribe(
        response => {
          console.log(response);
          this.product = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

}
