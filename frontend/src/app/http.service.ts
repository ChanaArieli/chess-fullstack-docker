import { Injectable } from '@angular/core';
import { Coord } from './coord';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  isValidMove(from: Coord, to: Coord): Observable<boolean> {
    return this.httpClient.get<boolean>('/api/valid?fromX=' + from.x + '&fromY=' +
      from.y + '&toX=' + to.x + '&toY=' + to.y);
  }
}
