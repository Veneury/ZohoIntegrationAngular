import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ZohoIntegrationService } from 'src/app/services/zoho-integration.service';

@Component({
  selector: 'app-create-posibles-clientes',
  templateUrl: './create-posibles-clientes.component.html',
  styleUrls: ['./create-posibles-clientes.component.scss']
})
export class CreatePosiblesClientesComponent implements OnInit {
  public leadsForm!: FormGroup;
  constructor(private _formBuider: FormBuilder, private _services:ZohoIntegrationService) {}

  ngOnInit(): void {
    this.leadsForm = this._formBuider.group({
      company: ["", Validators.required],
      last_Name: ["", Validators.required],
      first_Name: ["", Validators.required],
      email: ["", Validators.required],
      state: ["", Validators.required],
      website: ["", Validators.required],
      country: ["", Validators.required],
      lead_Source: ["", Validators.required],
      phone: ["", Validators.required],
      fax: ["", Validators.required],
      lead_Status: ["", Validators.required],
      no_of_Employees: ["", Validators.required],
      rating: ["", Validators.required],
      annual_Revenue: ["", Validators.required],
      skype_ID: ["", Validators.required],
      secondary_Email: ["", Validators.required],
      twitter: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      description: ["", Validators.required],
      zip_Code: ["", Validators.required],
    });
  }

  saveLeads(){
    this._services.saveLeads(this.leadsForm.value).subscribe(
      (data) => {
        if(data!=null){
          alert("Se ha creado correctamente");
        }
      }
    );
  }
}
