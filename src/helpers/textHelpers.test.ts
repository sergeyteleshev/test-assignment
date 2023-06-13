import * as textHelpers from '../helpers/textHelpers';

describe('generate random string', () => {
  test('returns a string with the specified length', () => {
    const length = 10;
    const randomString = textHelpers.generateRandomString(length);
    expect(randomString).toHaveLength(length);
  });

  test('returns a string consisting of valid characters', () => {
    const length = 10;
    const randomString = textHelpers.generateRandomString(length);
    const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const isValid = randomString.split('').every((char) => validCharacters.includes(char));
    expect(isValid).toBe(true);
  });
});

describe('getRandomStringsData', () => {
  const mockedString = 'mocked-string'
  let generateRandomStringSpy: any = null

  beforeAll(() => {
    generateRandomStringSpy = jest.spyOn(textHelpers, 'generateRandomString').mockImplementation(() => mockedString);
  })

  afterAll(() => {
    if (generateRandomStringSpy) {
      generateRandomStringSpy.mockRestore();
    }
  })

  it('returns a map of random strings with the correct number of entries', () => {
    const n = 3;
    const m = 4;
    const len = mockedString.length;
    const result = textHelpers.getRandomStringsData(n, m, len);

    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBe(n * m);
  });

  it('generates random strings of the specified length', () => {
    const n = 2;
    const m = 2;
    const len = mockedString.length;
    const result = textHelpers.getRandomStringsData(n, m, len);

    result.forEach((value) => {
      expect(value).toHaveLength(len);
    });
  });
});
