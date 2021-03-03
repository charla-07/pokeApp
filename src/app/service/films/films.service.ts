import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends HttpClientService{
  private endpoint: any;

  constructor(httpClient: HttpClient, router: Router) {
    super(httpClient, router);
   }

   public getFilms(id: any): Promise <any> {
    const url: string = id;
    return this.get(id);
    
  }
}
