import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSelectorComponent {
  @Input() set teams(teams: Team[]) {
    this.innerTeams = teams.sort((a, b) => a.name.localeCompare(b.name))
  }
  get teams(): Team[] {
    return this.innerTeams;
  }

  @Output() selected = new EventEmitter<Team>();

  // Improvment => add a required validator
  protected control = new FormControl<Team | null>(null);

  private innerTeams: Team[] = [];

  protected select(): void {
    if (null === this.control.value) {
      return;
    }
    
    this.selected.emit(this.control.value);
  }
}
