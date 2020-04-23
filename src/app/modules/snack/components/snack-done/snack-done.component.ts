import { Component, OnInit, Inject } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-done',
  templateUrl: './snack-done.component.html',
  styleUrls: ['./snack-done.component.scss'],
})
export class SnackDoneComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
