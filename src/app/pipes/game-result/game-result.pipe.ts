import { Pipe, PipeTransform } from '@angular/core';
import { Game, Team } from 'src/app/models';
import { GameService } from 'src/app/services';

@Pipe({
  name: 'appGameResult',
})
export class GameResultPipe implements PipeTransform {
  constructor(private gameService: GameService) {}

  transform(value: Game, team: Team): boolean {
    return this.gameService.hasWon(value, team);
  }
}
