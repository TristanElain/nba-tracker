import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team.model';

@Component({
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  protected teams: Team[] = [];

  protected selectedTeams: Set<Team> = new Set();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        console.log(data);
        this.teams = data['teams'];
      })
  }

  teamSelected(team: Team) {
    this.selectedTeams.add(team);
  }
}
