import { Component, OnInit } from '@angular/core';
import { Notes } from '../Interfaces/Notes.interfaces';
import { ZohoIntegrationService } from '../services/zoho-integration.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public ResultNotes:any[] = []
  constructor(private _zohoIntegratioService: ZohoIntegrationService) { }

  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads(){

    this._zohoIntegratioService.getAllNotes().subscribe(
      (data) => {

        this.ResultNotes.push(data);
        // data.forEach((element:ZohoRest) => {
        //   this.Owner.push(element.Owner);
        //   this.resultLeads.push(element);
        // });
        console.log(JSON.stringify(data)) ;
      }
    );
  }

}
