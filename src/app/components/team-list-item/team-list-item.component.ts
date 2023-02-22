import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Game, Team } from 'src/app/models';
import { GameService } from 'src/app/services';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamListItemComponent {
  @Input() set team(team: Team) {
    this.innerTeam = team;
    this.logoUrl = `https://interstate21.com/nba-logos/${team.abbreviation}.png`;
  }

  get team(): Team {
    return this.innerTeam;
  }

  @Input() set games(games: Game[] | null) {
    this.innerGames = games;
    if (null === games || !this.team) {
      this.averageScored = null;
      this.averageConceded = null;

      return;
    }

    const sums: {conceded: number, scored: number} = games.reduce(
      (sums, currentGame) => {
        const pointScored = this.gameService.getScore(currentGame, this.team);
        const pointConceded = this.gameService.getOpposingScore(
          currentGame,
          this.team
        );

        return {
          conceded: sums.conceded + pointConceded,
          scored: sums.scored + pointScored,
        };
      },
      { conceded: 0, scored: 0 }
    );

    this.averageConceded = sums.conceded / games.length;
    this.averageScored = sums.scored / games.length;
  }

  get games(): Game[] | null {
    return this.innerGames;
  }


  @Output() remove = new EventEmitter<void>();

  @Output() seeResults = new EventEmitter<void>();

  protected logoUrl = '';
  protected averageScored: number | null = null;
  protected averageConceded: number | null = null;

  private innerTeam!: Team;
  private innerGames: Game[] | null = null;

  constructor(private gameService: GameService) {}
}
