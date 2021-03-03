import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends HttpClientService {
  private endpoint2: any;

  constructor(httpClient: HttpClient, router: Router) {
    super(httpClient, router);
    this.urlBase = environment.endpoint2.api;
    this.endpoint2 = environment.endpoint2.people;
   }

   public getPeople(id: any): Promise <any> {
    const url: string = this.endpoint2.id;
    return this.get(url.replace('_id_', id));
    
  }
}
