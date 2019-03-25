import Password from './auth.password';
import Token from './auth.token';
import { UserDto } from 'src/users/User.dto';

export default class AuthService {
  constructor(
    private readonly password: Password,
    private readonly token: Token,
  ) {}

  hashPassword(password: string): string {
    return this.password.hash(password);
  }

  comparePassword(password: string, hashedPassword: string): boolean {
    return this.password.compare(password, hashedPassword);
  }

  signToken(data: UserDto): string {
    return this.token.sign(data);
  }

  verifyToken(token: string): boolean {
    return this.token.verify(token);
  }
}
