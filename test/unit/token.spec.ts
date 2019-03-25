import Token from '../../src/auth/auth.token';
import user from '../fixtures/user';

describe('Token', () => {
  let token: Token;

  beforeEach(() => {
    process.env.SECRET_KEY = 'SDSLSSFSLFDLS';
    token = new Token();
  });

  it('should generate token of type User DTO', () => {
    const signature = token.sign(user.omokolataiwo);
    expect(!!signature.length).toBe(true);
  });

  it('should throw exception when key is not provided', () => {
    process.env.SECRET_KEY = '';

    const token = new Token();
    try {
      token.sign(user.omokolataiwo);
    } catch (error) {
      expect(error.message).toEqual('Secret key not provided.');
    }
  });
});
