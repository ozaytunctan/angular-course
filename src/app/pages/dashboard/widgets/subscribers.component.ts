import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-subscribers',
  standalone: true,
  imports: [
    MatIcon
  ],
  template: `

    <div class="flex flex-row gap-1 mt-2">
      <p class="font-bold text-green-800">25,00</p>
      <mat-icon class="text-green-800">arrow_circle_up</mat-icon>
    </div>


    <div class="text-dim-gray stat-subtext">
      <span class="text-green-700">+500</span> in the las 28 years
    </div>
  `
})
export class SubscribersComponent {

}
