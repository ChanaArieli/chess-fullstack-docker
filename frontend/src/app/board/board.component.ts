import { Component, OnInit } from '@angular/core';
import { Coord } from '../coord';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  sixtyFour = new Array(64).fill(0).map((_, i) => i);
  knightPosition$ = this.gameService.knightPosition$;
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

  xy(i): Coord {
    return {
      x: i % 8,
      y: Math.floor(i / 8)
    };
  }

  isBlack({x, y}: Coord) {
    return (x + y) % 2 === 1;
  }

  handleSquareClick(pos: Coord) {
    this.gameService.moveKnight(pos);
  }

}
