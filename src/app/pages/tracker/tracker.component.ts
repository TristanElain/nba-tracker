import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Game, Team } from 'src/app/models';
import { GameService } from 'src/app/services';

@Component({
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  protected teams: Team[] = [];

  protected selectedTeams: Team[] = [];

  protected games: { [teamId: number]: Observable<Game[]> } = {};

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.teams = data['teams'];
      const locationState = this.location.getState();
      if (locationState && 'object' === typeof locationState && 'selectedTeams' in locationState) {
        this.selectedTeams = locationState.selectedTeams as Team[];
        this.selectedTeams.forEach(team => {this.addGames(team)})
      }
    });
  }

  protected teamSelected(team: Team): void {
    this.selectedTeams = [...new Set([...this.selectedTeams, team])];
    this.updateLocation();
  }

  protected removeTeam(team: Team): void {
    const teamsSet = new Set(this.selectedTeams);
    teamsSet.delete(team);
    this.selectedTeams = [...teamsSet];
    this.deleteGames(team);
    this.updateLocation();
  }

  private addGames(team: Team): void {
    this.games = {
      ...this.games,
      [team.id]: this.gameService.lastTwelveDays(team.id),
    };
  }

  private deleteGames(team: Team) {
    delete this.games[team.id];
  }

  private updateLocation() {
    this.location.replaceState(this.location.path(), undefined, { selectedTeams: this.selectedTeams })
  }
}
