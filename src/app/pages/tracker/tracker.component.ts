import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Game, Team } from 'src/app/models';
import { GameService } from 'src/app/services';

@Component({
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  protected teams: Team[] = [];

  protected selectedTeams: Team[] = [];

  protected games: {[teamId: number]: Observable<Game[]>} = {};

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        console.log(data);
        this.teams = data['teams'];
      })
  }

  teamSelected(team: Team) {
    this.selectedTeams = [...new Set([...this.selectedTeams, team])];
    this.games = {...this.games, [team.id]: this.gameService.lastTwelveDays(team.id)};
  }
}
