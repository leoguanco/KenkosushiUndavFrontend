import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public name: string;
  public type: string;
  public image: string;
  public description: string;
  public price: number;
  public marketable: boolean;
  public amountPeople: number;
  public errorMessage;
  public products;
  public product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  addProduct() {
    const data = {
      name: this.name,
      type: this.type,
      image: this.image,
      description: this.description,
      price: this.price,
      marketable: this.marketable,
      amountPeople: this.amountPeople
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
      name: this.name,
      type: this.type,
      image: this.image,
      description: this.description,
      price: this.price,
      marketable: this.marketable,
      amountPeople: this.amountPeople
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
