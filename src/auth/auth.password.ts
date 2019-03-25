import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class Password {
  private readonly iteration = 1024;
  private readonly keyLength = 32;
  private readonly digest = 'sha512';

  hash(password: string): string {
    if (typeof password !== 'string' || !password.length) {
      throw new Error('Malformed password.');
    }
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .pbkdf2Sync(password, salt, this.iteration, this.keyLength, this.digest)
      .toString('hex');
    return [salt, hash].join('$');
  }

  compare(password: string, hashedPassword: string): boolean {
    const [salt, hash] = hashedPassword.split('$');
    return (
      crypto
        .pbkdf2Sync(password, salt, this.iteration, this.keyLength, this.digest)
        .toString('hex') === hash
    );
  }
}
