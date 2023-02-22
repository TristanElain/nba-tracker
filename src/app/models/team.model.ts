import { Conference } from './conference.enum';

export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: Conference;
  division: string;
  full_name: string;
  name: string;
}
