import {Component} from '@angular/core';
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  template: `
    <h2>Parent Component</h2>
    <app-child></app-child>
  `
})
export class ParentComponent {

  showAlert(): void {
    alert("Merhaba");
  }

}
