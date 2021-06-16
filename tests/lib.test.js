const lib = require('../lib');

describe('absolute', () => {
  it('should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it('should return a negative number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it('should return 0  if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Marcel');
    expect(result).toMatch(/Marcel/);
  });
});

describe('getCurrency', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();

    expect(result).toContain('USD');
    expect(result).toContain('EUR');
    expect(result).toContain('AUD');

    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
  });
});

describe('getProduct', () => {
  it('should return the product with the given id', () => {
    const result = lib.getProduct(1);

    expect(result).toEqual({ id: 1, price: 10 });

    //if more than one prop than use this
    expect(result).toMatchObject({ id: 1, price: 10 });

    expect(result).toHaveProperty('id', 1);
  });
});

describe('registerUser', () => {
  it('should throw if username is falsy', () => {
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach((a) =>
      expect(() => {
        lib.registerUser(a);
      }).toThrow()
    );
  });

  it('should return a user object if valid username is passed', () => {
    const result = lib.registerUser('Marcel');
    expect(result).toMatchObject({ username: 'Marcel' });
    expect(result.id).toBeGreaterThan(0);
  });
});
