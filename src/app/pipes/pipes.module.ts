import { NgModule } from '@angular/core';
import { ConferencePipe } from './conference';
import { GameResultPipe } from './game-result';

@NgModule({
  declarations: [ConferencePipe, GameResultPipe],
  exports: [ConferencePipe, GameResultPipe],
})
export class PipesModule {}
