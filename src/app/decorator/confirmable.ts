import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Type} from '@angular/core';
import {ComfirmDialogComponent} from "../components/comfirm-dialog/comfirm-dialog.component";
import {AppComponent} from "../app.component";
import {take} from "rxjs";

export interface ConfirmableDecoratorOptions {
  title?: string;
  text?: string;
}

export function Confirmable(option?: ConfirmableDecoratorOptions) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;
    if (!option){
      option = {
        title: 'Onay',
        text: 'Bu işlemi onaylıyor musunuz.?',
      };
    }

    descriptor.value = async function (...args: any[]) {
      const dialog: MatDialog = AppComponent.INJECTOR.get<MatDialog>(
        MatDialog as Type<MatDialog>
      );
      // const dialog: MatDialog = inject(MatDialog);
      const dialogRef: MatDialogRef<ComfirmDialogComponent> = dialog.open(
        ComfirmDialogComponent,
        {
          data: {
            title: option?.title,
            text: option?.text,
          },
        }
      );

      dialogRef.afterClosed()
        .pipe(take(1))
        .subscribe((result) => {
          if (result === true) {
            //method invoke
            return originalMethod.apply(this, args);
          }
        });
    };

    return descriptor;
  };
}
