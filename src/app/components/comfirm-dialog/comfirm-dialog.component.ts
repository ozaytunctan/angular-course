import {Component, Inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

export type DialogData = {
  title: string;
  text: string;
};

@Component({
  selector: 'comfirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      {{ data.text }}
    </div>
    <div mat-dialog-actions>
      <button [mat-dialog-close]="false" mat-button>Cancel</button>
      <button [mat-dialog-close]="true" mat-button>Ok</button>
    </div>
  `
})
export class ComfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}
