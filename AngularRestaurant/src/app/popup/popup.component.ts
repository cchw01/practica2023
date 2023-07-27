import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  template: `
    <h1 mat-dialog-title>Multumim {{ data.name }}!</h1>
    <mat-dialog-content>Mesajul tau a fost trimis</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class PopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) { }
}
