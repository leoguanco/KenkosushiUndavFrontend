import { Component, OnInit } from '@angular/core';
import {Product} from '../../../class/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-abmproducts',
  templateUrl: './abmproducts.component.html',
  styleUrls: ['./abmproducts.component.css']
})
export class AbmproductsComponent implements OnInit {
  public errorMessage;
  public products: Array<Product>;
  public product: Product;
  public view: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
    this.view = 'products';
    this.product = new Product();
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
          this.getAllProduct();
          this.view = 'products';
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
