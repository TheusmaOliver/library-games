import { Profile } from 'src/profiles/entities/profile.entity';

export class User {
  id?: number;
  createdAt?: string | Date;
  imagemUrl: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  cpf: string;
  admin?: boolean;
  profiles?: Profile[];
}
