import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { User } from '../../../class/user';
import { UserService } from '../../../services/user.service';
import {Address} from '../../../class/address';
import {Phone} from '../../../class/phone';
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-abmuser',
  templateUrl: './abmuser.component.html',
  styleUrls: ['./abmuser.component.css']
})
export class AbmuserComponent implements OnInit {
  public user: User;
  public address: Address;
  public phone: Phone;
  public users: Array<User>;
  public errorMessage;
  public view: string;

  constructor(private userService: UserService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.getAllUser();
    this.view = 'user';
    this.user = new User();
    this.address = new Address();
    this.phone = new Phone();
  }

  addUser() {
    let userResponse: User;
    const data = {
      username: this.user.username,
      password: this.user.password,
      name: this.user.name,
      email: this.user.email,
      observations: this.user.observations
    };

    this.userService.addUser(data)
      .subscribe(
        response => {
          userResponse = response;

          const dataPhone = {
            phone: this.phone.phone,
            user: userResponse
          };

          const dataAddres = {
            address: this.address.address,
            typeAddress: this.address.typeAddress
          };

          this.userService.addUserPhone(userResponse.id, dataPhone).subscribe(
            phoneResponse => {
              console.log(phoneResponse);
            }, error2 => {
              this.errorMessage = <any>error2;

              if (this.errorMessage !== null) {
                console.log(this.errorMessage);
              }
            }
          );

          this.userService.addUserAddress(userResponse.id, dataAddres).subscribe(
            addressResponse => {
              console.log(addressResponse);
            }, error2 => {
              this.errorMessage = <any>error2;

              if (this.errorMessage !== null) {
                console.log(this.errorMessage);
              }
            }
          );

          this.user = new User();
          this.getAllUser();
          this.view = 'user';
          this.toastr.info('Cliente creado', 'Clientes');
        }, error => {
          this.errorMessage = <any>error;
          this.toastr.error('Se produjo un error en el servidor', 'Error');
          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  deleteUser(item) {
    this.userService.deleteUserAddress(item.id)
      .subscribe(
        response => {
          console.log(response);
          this.userService.deleteUserPhone(item.id)
            .subscribe(
              response2 => {
                console.log(response2);
                this.userService.deleteUser(item.id)
                  .subscribe(
                    response3 => {
                      console.log(response3);
                      this.getAllUser();
                      this.toastr.info('Cliente eliminado', 'Clientes');
                    }, error => {
                      this.errorMessage = <any>error;
                      this.toastr.error('Se produjo un error en el servidor', 'Error');
                      if (this.errorMessage !== null) {
                        console.log(this.errorMessage);
                      }
                    }
                  );
              }, error2 => {
                this.errorMessage = <any>error2;
                this.toastr.error('Se produjo un error en el servidor', 'Error');
                if (this.errorMessage !== null) {
                  console.log(this.errorMessage);
                }
              }
            );
        }, error2 => {
          this.errorMessage = <any>error2;
          this.toastr.error('Se produjo un error en el servidor', 'Error');
          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

  getAllUser() {
    this.userService.getAllUser()
      .subscribe(
        response => {
          console.log(response);
          this.users = response;
        }, error => {
          this.errorMessage = <any>error;
          this.toastr.error('Se produjo un error en el servidor', 'Error');
          if (this.errorMessage !== null) {
            console.log(this.errorMessage);
          }
        }
      );
  }

}
