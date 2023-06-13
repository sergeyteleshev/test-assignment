const generateRandomString = (n: number): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

const getRandomStringsData = (n: number, m: number, len: number) => {
  const strs = new Map()
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          strs.set(`${i}-${j}`, generateRandomString(len))
      }
  }

  return strs
}

export {generateRandomString, getRandomStringsData}