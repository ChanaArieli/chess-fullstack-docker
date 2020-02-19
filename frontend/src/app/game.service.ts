import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coord } from './coord';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  currentPosition: Coord;

  constructor(private httpService: HttpService) {
    this.knightPosition$.subscribe(kp => {
      this.currentPosition = kp;
    });
  }

  knightPosition$ = new BehaviorSubject<Coord>({x: 2, y: 5});

  moveKnight(to: Coord) {
    this.httpService.isValidMove(this.currentPosition, to).subscribe(isValid => {
      if (isValid) {
        this.knightPosition$.next(to);
      }
    });
  }
}
