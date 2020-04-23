import { Injectable, NgModule } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ModalInfoComponent } from 'src/app/modules/modals/components/modal-info/modal-info.component';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor(public modalInfo: MatDialog) {}

  openModalInfo(): void {
    const dialogRef = this.modalInfo.open(ModalInfoComponent, {
      width: '350px',
      data: { email: '', phone: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

  onSubmitModalInfo(data): boolean {
    window.alert(JSON.stringify(data));
    return true;
  }
}
