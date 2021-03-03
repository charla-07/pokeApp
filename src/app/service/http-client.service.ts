import { HttpClient, HttpClientModule } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  protected urlBase: string;

  constructor(protected httpClient: any, protected router: any) {
    this.urlBase = '';
   }

   private getResponse(htpp: any) {
     return new Promise((resolve: any, reject: any) => {
       htpp.subscribe((res) => {
         resolve(res);
       }, (error: any) => {
         switch (error.status) {
           case 400:
             reject('La información enviada no es correcta.')
             break;
           case 401:
             reject('Las credenciales no son correctas.')
             break;
           case 404:
             reject('No se encuentraron datos.')
             break;
           case 500:
             reject('El servicio por el momento no esta disponible.')
             break;
         }
       })
     })
   }

   protected get(url: string): Promise <any> {
    return this.getResponse(this.httpClient.get(`${this.urlBase}${url}`));
   }

   /** PARA AGREGAR */
   protected post(url: string): Promise <any> {
     return this.getResponse(this.httpClient.post(`${this.urlBase}${url}`))
   }
}
