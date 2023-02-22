import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game, Team } from 'src/app/models';
import { GameService } from 'src/app/services';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  
  protected team!: Team;

  protected games!: Observable<Game[]>

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router,
    private location: Location) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (null !== data['team']) {
        this.team = data['team'];
        this.games = this.gameService.lastTwelveDays(this.team.id);
      } else {
        this.router.navigate([''])
      }
    })
  }

  protected goBack() {
    this.location.back();
  }
}
