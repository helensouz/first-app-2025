import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import {MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog,} from '@angular/material/dialog';



export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export class DialogDataExampleDialog {
  data = inject(MAT_DIALOG_DATA);
}


@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})


export class CreateTaskComponent {

  dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }





}

@Component({
  selector: 'dialog-content-example-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: '../create-task/dialog-content/dialog-content.component.html',
})

export class DialogContentExampleDialog {}
