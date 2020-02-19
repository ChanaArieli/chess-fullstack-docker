import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkyhookDndModule } from '@angular-skyhook/core';
import { default as HTML5Backend } from 'react-dnd-html5-backend';
import { KnightComponent } from './knight/knight.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardSquareComponent } from './board-square/board-square.component';

@NgModule({
  declarations: [
    AppComponent,
    KnightComponent,
    SquareComponent,
    BoardComponent,
    BoardSquareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SkyhookDndModule.forRoot({backend: HTML5Backend })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
