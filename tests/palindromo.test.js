const ePalindromo = require('../src/palindromo');

describe('Testes da Função Palíndromo', () => {
  test('"arara" deve ser palíndromo', () => {
    expect(ePalindromo('arara')).toBe(true);
  });

  test('"casa" não deve ser palíndromo', () => {
    expect(ePalindromo('casa')).toBe(false);
  });
});
