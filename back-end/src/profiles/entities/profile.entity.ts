import { Game } from 'src/games/entities/game.entity';
import { User } from 'src/users/entities/user.entity';

export class Profile {
  title: string;
  userId: number;
  user?: User;
  games?: Game[];
}
