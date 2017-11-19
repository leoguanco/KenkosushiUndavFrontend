import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from "../../../services/configuration.service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  public quantityDelivery: number;
  public minDeliveryTime: Date;
  public minDeliveryTimeOrd: Date;
  public errorMessage;
  public configurations;
  public configuration;


  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
  }

  updateConfiguration(item){
    const data={
      quantityDelivery: this.quantityDelivery,
      minDeliveryTime: this.minDeliveryTime,
      minDeliveryTimeOrd: this.minDeliveryTimeOrd
    }

    this.configurationService.updateConfiguration(item.id, data)
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

  updatePurchaseSystem(){}

}
