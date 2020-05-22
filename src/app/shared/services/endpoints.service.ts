import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EndpointService {


    httpParams = new HttpParams()
    .set('api_key', environment.token)
    .set('laguage', environment.language)

    constructor(private http: HttpClient){}

    discover(mediaType, page){
        return this.http.get<any>(`${environment.api}discover/${mediaType}`, {params:this.httpParams.set('page', page)})
    }

}