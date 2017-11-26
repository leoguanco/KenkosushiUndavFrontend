import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../../services/configuration.service';
import {Configuration} from '../../../class/configuration';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  public errorMessage;
  public configuration: Configuration;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
  }

  updateConfiguration(item) {
    const data = {
      quantityDelivery: this.configuration.quantityDelivery,
      minDeliveryTime: this.configuration.minDeliveryTime,
      minDeliveryTimeOrd: this.configuration.minDeliveryTimeOrd
    };

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

  updatePurchaseSystem() {}

}
