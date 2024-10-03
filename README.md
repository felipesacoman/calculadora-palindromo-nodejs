# Node.js Calculadora e Verificação de Palíndromo com Jest

## Descrição

Este projeto implementa duas funcionalidades principais:

- **Calculadora**: Realiza operações matemáticas básicas como soma, subtração, multiplicação e divisão.
- **Verificação de Palíndromo**: Verifica se uma string é um palíndromo, ignorando espaços, maiúsculas e caracteres especiais.

Os testes foram realizados utilizando Jest e o projeto gera um relatório de cobertura de código.

## Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/felipesacoman/calculadora-palindromo-nodejs.git
   cd calculadora-palindromo-nodejs
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Como Executar os Testes

1. Para rodar os testes e gerar o relatório de cobertura:
   ```bash
   npm test
   ```

2. O relatório de cobertura será gerado na pasta `coverage/`. Para visualizar, abra o arquivo `index.html` dentro da subpasta `coverage/lcov-report` no seu navegador.

## Estrutura do Projeto

- **`src/calculadora.js`**: Função que realiza as operações de soma, subtração, multiplicação e divisão.
- **`src/palindromo.js`**: Função que verifica se uma string é um palíndromo.
- **`tests/calculadora.test.js`**: Testes unitários para a função de calculadora.
- **`tests/palindromo.test.js`**: Testes unitários para a função de verificação de palíndromo.
- **`coverage/`**: Diretório gerado automaticamente que contém o relatório de cobertura gerado pelo Jest.
