import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ZohoIntegrationService } from 'src/app/services/zoho-integration.service';

@Component({
  selector: 'app-create-tareas',
  templateUrl: './create-tareas.component.html',
  styleUrls: ['./create-tareas.component.css']
})
export class CreateTareasComponent implements OnInit {
  public tasksForm!: FormGroup;

  constructor(private _formBuider: FormBuilder, private _services:ZohoIntegrationService) { }

  ngOnInit(): void {
    this.tasksForm = this._formBuider.group({
      Owner: ["", Validators.required],
      Subject: ["", Validators.required],
      Due_Date: ["", Validators.required],
      $se_module: ["", Validators.required],
      Status: ["", Validators.required],
      Priority: ["", Validators.required],
      Remind_At: ["", Validators.required],
      Description: ["", Validators.required],
    });
  }

  saveTasks(){
    this._services.saveLeads(this.tasksForm.value).subscribe(
      (data) => {
        if(data!=null){
          alert("Se ha creado correctamente");
        }
      }
    );
  }

}
