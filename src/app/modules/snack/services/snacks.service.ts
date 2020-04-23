import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackDoneComponent } from 'src/app/modules/snack/components/snack-done/snack-done.component';

@Injectable({
  providedIn: 'root',
})
export class SnacksService {
  constructor(private snackDone: MatSnackBar) {}

  openSnackDone(message: string, action: string, actionCallback: Function) {
    const refSnackDone = this.snackDone.open(message, action, {
      panelClass: 'gp-snackbar',
      duration: 2000,
    });

    refSnackDone.onAction().subscribe(() => {
      actionCallback();
    });
  }
}
