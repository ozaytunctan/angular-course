import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {Confirmable} from "../../decorator/confirmable";
import {PreAuthorize} from "../../decorator/pre-authorize";

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

  // @PreAuthorize()
  @PreAuthorize("ADMIN_ROLE", "CREATE_ROLE")
  @Confirmable()
  onSave() {
    this.confirmed = true;
    alert("Confirmed :" + this.confirmed);
  }

}
