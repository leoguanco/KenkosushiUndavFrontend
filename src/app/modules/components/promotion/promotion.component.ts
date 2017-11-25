import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../../services/promotion.service';
import {Promotion} from '../../../class/promotion';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  public errorMessage;
  public promotions: Array<Promotion>;
  public promotion: Promotion;


  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
    this.getAllPromotion();
  }

  addPromotion() {
    const data = {
      day: this.promotion.day,
      percentaje: this.promotion.percentaje
    };

    this.promotionService.addPromotion(data)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          this.errorMessage= <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  updatePromotion(item) {
    const data = {
      day: this.promotion.day,
      percentaje: this.promotion.percentaje
    };

    this.promotionService.updatePromotion(item.id, data)
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

  deletePromotion(item) {
    this.promotionService.deletePromotion(item.id)
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

  getAllPromotion() {
    this.promotionService.getAllPromotion()
      .subscribe(
        response => {
          console.log(response);
          this.promotions = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getPromotion(item){
    this.promotionService.getPromotion(item.id)
      .subscribe(
        response => {
          console.log(response);
          this.promotion = response;
        }, error => {
          this.errorMessage = <any>error;

          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

}
