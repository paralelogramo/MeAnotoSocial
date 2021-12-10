import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addeventdialog',
  templateUrl: './addeventdialog.component.html',
  styleUrls: ['./addeventdialog.component.scss']
})
export class AddeventdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddeventdialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  yesChoice(): void{
    this.dialogRef.close({event:'Yes'})
  }

  noChoice(): void{
    this.dialogRef.close({event:'No'})
  }
}
