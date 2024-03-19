import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoTempoService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=c79dc38beee77d804b839f8f53008fb6&units=metric&q=';

  constructor(private http: HttpClient) { }

  obterPrevisao(city: string){
    return this.http.get(`${this.apiUrl}${city}&lang=pt_br`);
  }
}