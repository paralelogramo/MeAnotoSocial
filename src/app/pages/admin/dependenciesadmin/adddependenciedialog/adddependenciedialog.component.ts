import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-adddependenciedialog',
  templateUrl: './adddependenciedialog.component.html',
  styleUrls: ['./adddependenciedialog.component.scss']
})
export class AdddependenciedialogComponent implements OnInit {

  public formSignIn: FormGroup;
  public regName = '';
  public regCapacity = '';
  public regLocation = '';

  constructor(
    public dialogRef: MatDialogRef<AdddependenciedialogComponent>,
    private crudService: CrudService,
    private snackBar: MatSnackBar
  ) {
    this.formSignIn = new FormGroup({
      name: new FormControl(this.regName, [Validators.required]),
      capacity: new FormControl(this.regCapacity, [Validators.required]),
      location: new FormControl(this.regLocation, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  registerDependencie(): void{
    this.crudService.registerDependence(this.formSignIn.value).subscribe(data => {
      if(!Object.values(data)[0]){
        this.snackBar.open('Ups! Esta sala ya ha sido creada', undefined , {
          duration: 4000,
        })
      }
      else{
        this.snackBar.open('Sala creada con éxito', undefined , {
          duration: 4000,
        })
        this.dialogRef.close()
      }
    })
  }

}
