import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Leads } from '../Interfaces/Leads.interfaces';
import { environment } from 'src/environments/environment';
import { RootObject } from '../interceptor/ZohoRest.interface';
import { LeadsSave } from '../Interfaces/SaveLeads.interfaces';
import { TasksSave } from '../Interfaces/SaveTasks.interfaces'
import { Notes } from '../Interfaces/Notes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ZohoIntegrationService {

  constructor(private _httpClient:HttpClient) { }

  getAllLeads(){
    return this._httpClient.get<RootObject>('https://localhost:44343/WeatherForecast/GetRecords/GetRecords');
  }
  saveLeads(LeadsSave:LeadsSave){
    return this._httpClient.post<LeadsSave>('https://localhost:44343/WeatherForecast/saveLeads/saveLeads',LeadsSave);
  }
  //Hay que modificar la ruta aquí
  getAllTasks(){
    return this._httpClient.get<RootObject>('https://localhost:44343/WeatherForecast/GetRecords/GetRecords');
  }
  saveTasks(TasksSave:TasksSave){
    return this._httpClient.post<TasksSave>('https://localhost:44343/WeatherForecast/saveLeads/saveLeads',TasksSave);
  }

  saveNotes(notes:Notes){
    return this._httpClient.post<Notes>('https://localhost:44343/WeatherForecast/saveNotes/saveNotes',notes);
  }

  getAllNotes(){
    return this._httpClient.get<Notes>('https://localhost:44343/WeatherForecast/getNotes/getNotes');
  }
}
