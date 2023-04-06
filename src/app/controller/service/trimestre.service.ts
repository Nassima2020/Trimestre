import { Injectable } from '@angular/core';
import {Trimestre} from '../model/trimestre';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TrimestreService {
private _trimestre = new Trimestre;
private _trimestres= new Array<Trimestre>;
private url =  'http://localhost:8036/api/v1/trimestre/';
  public save(): Observable<number>{
   return this.http.post<number>(this.url, this.trimestre);
}
  public deleteByRef(ref: string): Observable<number>{
    console.log('urrl===>' + this.url +'ref/' + ref);
   return this.http.delete<number>(this.url +'ref/' + ref);
}
  public findAll(): Observable<Array<Trimestre>>{
    return this.http.get<Array<Trimestre>>(this.url);
  }

  constructor(private http: HttpClient) { }

  get trimestre(): Trimestre {
    if(this._trimestre == null){
      this._trimestre = new Trimestre();
    }
    return this._trimestre;
  }

  set trimestre(value: Trimestre) {
    this._trimestre = value;
  }


  get trimestres(): Array<Trimestre> {
    if(this._trimestres == null){
      this._trimestres = new Array<Trimestre>();
    }
    return this._trimestres;
  }

  set trimestres(value: Array<Trimestre>) {
    this._trimestres = value;
  }
}
