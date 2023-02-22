import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Team } from 'src/app/models';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
  @Input() teams: Team[] = [];

  @Input() games!: {[key: number]: Observable<Game[]>};

  @Output() remove = new EventEmitter<Team>();

  protected trackById<T extends {id: number}>(index: number, value: T) {
    return value.id;
  }
}
