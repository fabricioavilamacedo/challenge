# Desafio Automação API e Web
## Descrição
Testes automatizado do desafio de automação API e Web
## Instruções
1. Baixe e instale o Node: [https://nodejs.org/]
2. Clone o repositório: `git clone git@github.com:fabricioavilamacedo/challenge-keeggo.git` (SSH) or `https://github.com/fabricioavilamacedo/challenge-keeggo.git` (HTTPS)
3. No diretório raiz do projeto rodar os comandos `npm install` e `npx cypress open` para abrir o framework
4. Após a inicialização do Cypress selecionar e rodar de teste desejado que ele já irá executar todos os casos de teste.

Observações: Sugerimos escolher o navegador 'Chrome' para execução dos testes.


## Estrutura de diretórios
```
/
├─ cypress/            # Raiz do projeto onde se encontram os demais diretórios e testes
├─ ├─e2e/              # Estrutura de diretórios que contém as estruturas dos testes automatizados
├─ ├─────elements/     # Diretório com os arquivos de elementos mapeados no frontend
├─ ├─────features/     # Contém os arquivos de funcionalidades com os BDDs dos testes
├─ ├─────pages/        # Estrutura de page object do projeto contendo as respectivas páginas
├─ ├─────services/     # Estruturas relacionadas as requisições de Apis
├─ ├─fixtures/         # Diretório padrão gerado através do comando 'npm init'
├─ ├─screenshots/      # Armazenamento de screenshots
├─ ├─support           # Diretório padrão gerado através do comando 'npm init'
├─ node_modules        # Coleção de funções
├─ .gitignore          # Lista de arquivos e pastas ignoradas pelo git
├─ cypress.config.js   # Arquivo para config cypress
├─ package-lock.json   # Manifesto do projeto
├─ package.json        # Manifesto do projeto
└─ README.md           # Esse arquivo
```
