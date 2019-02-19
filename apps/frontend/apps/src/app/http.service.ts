import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagePayload } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = '/xapi';
  //baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  public hello() {
    return this.http.get<MessagePayload>(`${this.baseUrl}/hello`);
  }

}
