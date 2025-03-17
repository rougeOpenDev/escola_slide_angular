module.exports = {
  types: [
    { value: 'feat', name: 'feat:     Uma nova funcionalidade' },
    { value: 'fix', name: 'fix:      Correção de bug' },
    { value: 'docs', name: 'docs:     Documentação apenas' },
    { value: 'style', name: 'style:    Alterações de estilo (espaços, formatação, etc)' },
    { value: 'refactor', name: 'refactor: Refatoração de código' },
    { value: 'perf', name: 'perf:     Melhoria de desempenho' },
    { value: 'test', name: 'test:     Adição ou correção de testes' },
    { value: 'build', name: 'build:    Alterações na build' },
    { value: 'ci', name: 'ci:       Alterações na integração contínua' },
    { value: 'chore', name: 'chore:    Outras mudanças que não modificam src ou testes' },
    { value: 'revert', name: 'revert:   Reversão de commit' },
    { value: 'WIP', name: 'WIP:      Trabalho em andamento' }
  ],
  scopes: [
    { name: 'componentes' },
    { name: 'serviços' },
    { name: 'configuração' },
    { name: 'estilo' },
    { name: 'documentação' },
    { name: 'testes' }
  ],
  messages: {
    type: 'Selecione o tipo de mudança que você está commitando:',
    scope: 'Selecione o escopo desta mudança (opcional):',
    customScope: 'Denomine o escopo desta mudança:',
    subject: 'Escreva uma descrição breve e imperativa da mudança:\n',
    body: 'Forneça uma descrição mais detalhada da mudança (opcional). Use "|" para quebrar linhas:\n',
    breaking: 'Liste quaisquer mudanças significativas (breaking changes):\n',
    footer: 'Liste quaisquer issues fechadas por esta mudança (opcional). Ex.: #31, #34:\n',
    confirmCommit: 'Tem certeza de que deseja prosseguir com o commit acima?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  footerPrefix: 'Closes:',
  subjectLimit: 200
};
