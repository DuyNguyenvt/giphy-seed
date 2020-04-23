import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalsService } from 'src/app/modules/modals/services/modals.service';

export interface ModalInfoInterface {
  email: string;
  phone: string;
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent {
  constructor(
    private modalsService: ModalsService,
    public modalInfoRef: MatDialogRef<ModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalInfoInterface
  ) {}
  // ngOnInit(): void {}

  closeModal(): void {
    this.modalInfoRef.close();
  }

  submitInfo(data): void {
    if (this.modalsService.onSubmitModalInfo(data)) {
      this.modalInfoRef.close();
    }
  }
}
