import { Component, Input, OnDestroy } from '@angular/core';
import { Coord } from '../coord';
import { SkyhookDndService } from '@angular-skyhook/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.css']
})
export class BoardSquareComponent implements OnDestroy {

  @Input() position: Coord;
  get black() {
    const { x, y } = this.position;
    return (x + y) % 2 === 1;
  }
  target = this.dnd.dropTarget('KNIGHT', {
    drop: monitor => {
      this.gameService.moveKnight(this.position);
    }
  });

  constructor(private dnd: SkyhookDndService, private gameService: GameService) { }

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
