import { Genrer } from 'src/genrers/entities/genrer.entity';
import { Profile } from 'src/profiles/entities/profile.entity';

export class Game {
  id?: number;
  title: string;
  cover: string;
  description: string;
  year: number;
  score: string;
  trailer: string;
  gameplay: string;
  profiles?: Profile[];
  genrers?: Genrer[];
}
