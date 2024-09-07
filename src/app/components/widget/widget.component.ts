import {Component, effect, input, signal, Type} from '@angular/core';
import {NgComponentOutlet} from "@angular/common";
import {Widget} from "../../models/widget";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {WidgetOptionsComponent} from "./widget-options/widget-options.component";

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    NgComponentOutlet,
    MatIconButton,
    MatIcon,
    WidgetOptionsComponent
  ],
  template: `
    <div class="container mat-elevation-z3"
         [style.background-color]="w().backgroundColor??'white'"
         [style.color]="w().color??'inherit'">

      <h3 class="m-0">{{ w().title }}</h3>
      <button mat-icon-button
              class="settings-button"
              (click)="showOptions.set(true)"
              [style.--mdc-icon-button-icon-color]="w().color??'inherit'">
        <mat-icon>settings</mat-icon>
      </button>

      <ng-container [ngComponentOutlet]="w().content"></ng-container>

      @if (showOptions()) {
        <app-widget-options [(showOptions)]="showOptions"
                            [data]="w()"/>
      }
    </div>
  `,
  styles: `

    :host {
      display: block;
      border-radius: 16px;
    }

    .container {
      position: relative;
      height: 100%;
      width: 100%;
      padding: 32px;
      box-sizing: border-box;
      border-radius: inherit;
      overflow: hidden;
    }

    .settings-button {
      position: absolute;
      top: 20px;
      right: 20px;
    }

  `,
  host: {
    '[style.grid-area]': '"span "+ (w().rows?? 1)+ " /span "+ (w().cols ?? 1)'
  }
})

export class WidgetComponent {
  w = input.required<Widget>({alias: 'widget'});
  showOptions = signal(false);

  constructor() {
    effect(() => {
      console.log(this.w());
    });
  }
}
