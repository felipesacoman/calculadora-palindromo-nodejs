const calculadora = require('../src/calculadora');

describe('Testes da Calculadora', () => {
  test('Soma de 1 + 2 deve retornar 3', () => {
    expect(calculadora(1, 2, 'soma')).toBe(3);
  });

  test('Divisão por zero deve lançar erro', () => {
    expect(() => calculadora(5, 0, 'divisao')).toThrow('Divisão por zero');
  });
});
