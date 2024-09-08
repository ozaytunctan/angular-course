import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-watch-time',
  standalone: true,
  imports: [
    MatIcon
  ],
  template: `
    <div class="row mb-8 mt-8">
      <p class="stat">25,025</p>
      <mat-icon class="text-green">check_circle</mat-icon>
    </div>


    <div class="text-dim-gray stat-subtext">
      <span class="text-green">+500</span>in the las 28 years
    </div>
  `
})
export class WatchTimeComponent {

}
