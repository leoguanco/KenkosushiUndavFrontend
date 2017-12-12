import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Product} from '../../../class/product';
import {ProductService} from '../../../services/product.service';
import {ToasterService} from 'angular2-toaster';
import {ToastsManager} from "ng2-toastr";

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

  constructor(private productService: ProductService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

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
          this.product = new Product();
          this.getAllProduct();
          this.view = 'products';
          this.toastr.info('Producto creado', 'Productos');
        }, error => {
          this.errorMessage = <any>error;
          if (this.errorMessage !== null) {
            this.toastr.error('Se produjo un error en el servidor', 'error');
            console.log(this.errorMessage);
          }
        }
      );
  }

  editProduct(item) {
    this.product = item;
    this.view = 'edit';
  }

  updateProduct(item) {
    const data = {
      id: this.product.id,
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
          this.getAllProduct();
          this.product = new Product();
          this.view = 'products';
          this.toastr.info('Producto modificado', 'Productos');
        }, error => {
          this.errorMessage = <any>error;
          this.toastr.error('Se produjo un error en el servidor', 'error');
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
          this.getAllProduct();
          this.toastr.warning('Producto eliminado', 'Productos');
        }, error => {
          this.errorMessage = <any>error;
          this.toastr.error('Se produjo un error en el servidor', 'error');
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
          this.toastr.error('Se produjo un error en el servidor', 'error');
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
          this.toastr.error('Se produjo un error en el servidor', 'error');
          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

}
