import { Component, OnInit } from '@angular/core';
import { ZohoRest } from 'src/app/interceptor/ZohoRest.interface';
import { ZohoIntegrationService } from 'src/app/services/zoho-integration.service';

@Component({
  selector: 'app-list-posibles-clientes',
  templateUrl: './list-posibles-clientes.component.html',
  styleUrls: ['./list-posibles-clientes.component.css']
})
export class ListPosiblesClientesComponent implements OnInit {

  constructor(private _zohoIntegratioService: ZohoIntegrationService) { }
  resultLeads:any[] = [];
  Owner:any[] = [];
  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads(){

    this._zohoIntegratioService.getAllLeads().subscribe(
      (data) => {

        this.resultLeads = data.data;
        data.data.forEach((element:ZohoRest) => {
          this.Owner.push(element.Owner);
          this.resultLeads.push(element);
        });
        console.log(JSON.stringify(data)) ;
      }
    );
  }
}
