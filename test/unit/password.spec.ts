import Password from '../../src/auth/auth.password';

describe('Password', () => {
  let password: Password;
  let hash: string;
  let userPassword = 'somerandompassword';

  beforeEach(() => {
    password = new Password();
    hash = password.hash(userPassword);
  });

  it('should not correspond with another password', () => {
    expect(password.compare('diff_password', hash)).toBe(false);
  });

  it('should match the same password', () => {
    expect(password.compare(userPassword, hash)).toBe(true);
  });

  it('should not accept malformed password', () => {
    try {
      password.hash('');
    } catch (e) {
      expect(e.message).toEqual('Malformed password.');
    }
  });
});
