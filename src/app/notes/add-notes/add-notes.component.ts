import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ZohoIntegrationService } from 'src/app/services/zoho-integration.service';
@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  public noteForm!: FormGroup;
  constructor(private _formBuider: FormBuilder, private _services:ZohoIntegrationService) {}

  ngOnInit(): void {
    this.noteForm = this._formBuider.group({
      Note_Title: ["", Validators.required],
      Note_Content: ["", Validators.required]
    });
  }
  saveNota(){
    this._services.saveNotes(this.noteForm.value).subscribe(
      (data) => {
        if(data!=null){
          alert("Se ha creado correctamente");
        }
      }
    );
  }
}
