# Portfólio — João Augusto

Portfólio pessoal bilíngue desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Recursos

- Tema claro e escuro com preferência persistente
- Conteúdo em português e inglês
- Layout responsivo
- Navegação por âncoras e menu móvel acessível
- Animações com suporte a `prefers-reduced-motion`
- Projetos filtráveis e estudo de caso do Diário Online
- Formulário de contato via cliente de e-mail

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm run build
npm run lint
npm run test
```

## Estrutura

- `src/App.tsx`: composição da página e preferências globais
- `src/components`: seções e elementos reutilizáveis da interface
- `src/data/content.ts`: conteúdo bilíngue puro, sem dependência de React
- `src/data/types.ts`: contratos tipados do conteúdo, projetos e trajetória
- `src/hooks`: comportamento reutilizável de reveal e parallax
- `src/utils`: funções puras compartilhadas pela interface
- `src/test`: configuração do ambiente de testes
- `src/**/*.test.tsx`: testes de comportamento dos componentes e da aplicação
- `src/App.css`: sistema visual e responsividade
- `src/index.css`: tokens, fontes e estilos globais
- `public`: imagens, fontes e currículo

## Publicação

O portfólio é publicado automaticamente no GitHub Pages após cada push para `main`:

`https://joaoAugustoParaty.github.io/joao-portfolio/`

O workflow executa testes, lint e build antes de publicar a pasta `dist`.
