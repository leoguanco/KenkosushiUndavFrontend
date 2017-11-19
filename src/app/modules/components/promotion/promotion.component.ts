import { Component, OnInit } from '@angular/core';
import {PromotionService} from "../../../services/promotion.service";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  public day: Date;
  public percentaje: number;
  public errorMessage;
  public promotions;
  public promotion;


  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
    this.getAllPromotion();
  }

  addPromotion(){
    const data={
      day: this.day,
      percentaje: this.percentaje
    }

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

  updatePromotion(item){
    const data={
      day: this.day,
      percentaje: this.percentaje
    }

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

  deletePromotion(item){
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

  getAllPromotion(){
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
