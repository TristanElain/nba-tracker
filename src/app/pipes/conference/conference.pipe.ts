import { Pipe, PipeTransform } from '@angular/core';
import { Conference } from 'src/app/models';

@Pipe({
  name: 'appConference',
})
export class ConferencePipe implements PipeTransform {
  transform(value: Conference): string {
    let conference: string;
    switch (value) {
      case Conference.EAST:
        conference = 'Eastern';
        break;

      case Conference.WEST:
        conference = 'Western';
        break;

      default:
        conference = 'Unknown';
    }
    return `${conference} conference`;
  }
}
