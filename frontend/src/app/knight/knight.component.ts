import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkyhookDndService } from '@angular-skyhook/core';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})
export class KnightComponent implements OnDestroy {
  knightSource = this.dnd.dragSource('KNIGHT', {
    beginDrag: () => ({})
  });
  isDragging$ = this.knightSource.listen(monitor => monitor.isDragging());
  constructor(private dnd: SkyhookDndService) { }

  ngOnDestroy(): void {
    this.knightSource.unsubscribe();
  }

}
