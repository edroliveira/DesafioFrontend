import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
// import 'rxjs/add/operator/toPromise';

import { Forecast } from './forecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private apiUrl = '/api/forecasts'

  constructor(private _http: HttpClient) {}

  public findAll(): Observable<Forecast[]> {
    return this._http.get<Forecast[]>(this.apiUrl);
  }

  createForecast(forecast: Forecast) {
    return this._http.post<Forecast[]>(this.apiUrl, forecast)
    }

  deleteForecastById(id:number) {
    const url = `${this.apiUrl}/${id}`;
    return this._http.delete<Forecast[]>(url);

  }

  updateForecastById(id:number, forecastData: any) {
    const url = `${this.apiUrl}/${id}`;
    return this._http.put<Forecast[]>(url, forecastData);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('Ops! Ocorreu um erro. Tente novamente mais tarde.', error);
    return Promise.reject(error.message || error);
    }
}
