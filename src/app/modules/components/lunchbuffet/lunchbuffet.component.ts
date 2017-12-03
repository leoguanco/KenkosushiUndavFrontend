import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../class/product';

@Component({
  selector: 'app-lunchbuffet',
  templateUrl: './lunchbuffet.component.html',
  styleUrls: ['./lunchbuffet.component.css']
})
export class LunchbuffetComponent implements OnInit {
  public products: Array<Product>;
  public errorMessage: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
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


}
