import globals from 'globals';
import js from '@eslint/js';

export default [
  // Configuração global
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },

  // Configuração JavaScript recomendada
  js.configs.recommended,

  // Regras personalizadas
  {
    rules: {
      // Forçar o uso de ponto e vírgula no final das declarações
      semi: ['error', 'always'],

      // Usar aspas simples em vez de duplas
      quotes: ['error', 'single'],

      // Avisar sobre o uso de console.log
      'no-console': 'off',

      // Forçar o uso de === e !== em vez de == e !=
      eqeqeq: ['error', 'always'],

      // Evitar variáveis não utilizadas
      'no-unused-vars': 'warn',

      // Forçar o uso de let ou const em vez de var
      'no-var': 'error',

      // Preferir const quando a variável não é reatribuída
      'prefer-const': 'error',

      // Espaçamento consistente em objetos
      'object-curly-spacing': ['error', 'always'],

      // Proibir múltiplas linhas em branco
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      'class-methods-use-this': 'off',
    },
  },
];
