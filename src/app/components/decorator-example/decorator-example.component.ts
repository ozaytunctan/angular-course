import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {Confirmable} from "../../decorator/confirmable";
import {PreAuthorize} from "../../decorator/pre-authorize";
import {Loggable} from "../../decorator/loggable";
import {RoleConstants} from "../../constants/role-constants";
import {Retryable} from "../../decorator/retryable";

@Component({
  selector: 'app-decorator-example',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './decorator-example.component.html',
  styleUrl: './decorator-example.component.scss'
})
export class DecoratorExampleComponent {

  confirmed: boolean = false;
  constructor() {
  }

  @PreAuthorize({roles:[RoleConstants.ADMIN_ROLE, RoleConstants.CREATE_ROLE]})
  @Confirmable({text: 'Fişi kesin kayda almak istediğinize eminmisiniz..?', title: 'Fiş Onay Ekranı'})
  @Loggable()
  onApprove() {
    this.confirmed = true;
    alert("Fiş kesin kayda başarıyla alındı. :" + this.confirmed);
  }

  @PreAuthorize({roles: ["ADMIN_ROLE1", "CREATE_ROLE1"]})
  @Confirmable({text: 'Fişi silmek istediğinize eminmisiniz.?', title: 'Silme Onay Ekranı'})
  @Loggable()
  onDelete() {
    this.confirmed = true;
    alert("Fiş silme işlemi yapılıyor...  :" + this.confirmed);
  }

}
