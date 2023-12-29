# Analisador de Texto

## Índice

- [1. Considerações gerais](#1-considerações-gerais)
- [2. Resumo do projeto](#3-resumo-do-projeto)
- [3. Funcionalidades](#4-funcionalidades)
- [6. Critérios de aceitação mínimos do projeto](#6-critérios-de-aceitação-mínimos-do-projeto)
- [7. Testes](#7-testes)
- [8. Dicas, sugestões e leituras complementares](#8-dicas-sugestões-e-leituras-complementares)
- [9. Considerações para solicitar seu Feedback de Projeto](#9-considerações-para-solicitar-seu-feedback-de-projeto)
- [10. Objetivos de aprendizagem](#10-objetivos-de-aprendizagem)
- [11. Funcionalidades opcionais](#11-funcionalidades-opcionais)

---

## 1. Considerações gerais

- Usei algumas coisas da formatação do readme original, pois quero exercitar a escrita de um readme estruturado e objetivo.
- O projeto foi feito individualmente, porém houve muita troca de dicas com as outras colegas(que foi super importante).
- Terminei o projeto na terceira sprint.
- Procurei fazer de forma mais simples possível, pra que pudesse entender o que estava acontecendo.

## 2. Resumo do projeto

Aplicação web criada para fazer analíse de textos em geral, seguindo criterios já pré estabelecidos. Utilizei JS, CSS e HTML.

## 3. Funcionalidades

1. A aplicação deve permitir digitar um texto em uma caixa de texto.

2. A aplicação tem as seguintes funções:
 
    - **Contagem de palavras**: faz a contagem de palavras encontradas no texto.
    - **Contagem de caracteres**: faz a contagem de caracteres encontrados no texto, incluindo espaços e sinais de
    pontuação.
    - **Contagem de caracteres excluindo espaços e sinais de pontuação**: faz a contagem de caracteres excluindo espaços e sinais de pontuação encontrados no texto.
    - **Comprimento médio das palavras**: mostra comprimento médio das palavras encontradas no texto.
    - **Contagem de números**: faz a contagem de quantos números tem no texto.
    - **Soma total dos números**: faz a soma de todos os números que
    estão no texto e mostra o resultado.
  
3. A aplicação limpa a caixa de texto e o conteudo dos contadore ao clicar no botão"Limpe seu texto".

---

## Deploy

Subi o projeto para o meu github e publiquei no github pages


### Controle de Versões (Git e GitHub)

- **GitHub: Criação de conta e repositórios, configuração de chaves SSH**

  + [ ] A estudante criou uma conta no Github.

  + [ ] A estudante configurou sua conta do Github com uma chave SSH.

- **Git: Controle de versões com git (clone, add, commit, push)**

  + [ ] A estudante criou um _fork_ para o projeto.

  + [ ] A estudante clonou seu repositório usando uma chave SSH.

  + [ ] A estudante criou _commits_ e os salvou no Github.

- **GitHub: Implantação com GitHub Pages**

  + [ ] A aplicação está implantada no GitHub Pages.

### Foco na Usuária

- **Projetar e desenvolver um produto ou serviço centrado nas usuárias**

### Design do Produto

- **Projetar em diferentes níveis de fidelidade**

  + [ ] A estudante criou protótipos de baixa fidelidade para a UI (interface gráfica).

- **Seguir os princípios básicos do design visual**

  + [ ] Foram consideradas as regras básicas de
        [design visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Reglas-basicas-de-diseno-visual_suVcO)
        para projetar a UI (interface gráfica).

## 7. Testes

Este projeto conta com 3 conjuntos de testes que ajudarão a verificar se
os critérios mínimos de aceitação são cumpridos.

### Testes Unitários

Um teste unitário é uma técnica de teste de software na qual se verifica
que cada componente individual de um programa ou sistema funcione corretamente
isoladamente. Em outras palavras, cada unidade de código é testada separadamente
para garantir que atenda aos requisitos e especificações.

Os testes unitários deste projeto executarão os métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` e `getAverageWordLength` com diferentes argumentos e verificarão
se os valores retornados são os esperados.

Você pode executar esses testes com o comando `npm run test` como mostrado
na imagem a seguir:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` em relação a diretrizes de estilo. Ambas as tarefas são executadas
automaticamente antes de executar os testes unitários ao usar o comando
`npm run test`. No caso do `JavaScript`, estamos usando um arquivo de configuração
do `eslint` chamado `.eslintrc`, que contém informações mínimas sobre o parser
a ser usado (qual versão do JavaScript/ECMAScript), o ambiente (navegador neste caso)
e as [regras recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
Em relação às próprias regras/diretrizes de estilo,
vamos seguir as recomendações _padrão_ tanto do `eslint` quanto do `htmlhint`.

### Testes de Critérios Mínimos de Aceitação

Esses testes analisarão seus arquivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
e
[`style.css`](src/style.css)
para verificar se você cumpre os
[critérios mínimos de aceitação](#6-critérios-de-aceitação-mínimos-do-projeto).
Cada critério está relacionado a um objetivo de aprendizado.

Você pode executar todos esses testes com o comando `npm run test:oas`
como mostrado na imagem a seguir:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Você também pode executar os testes de cada grupo de objetivos de aprendizado
individualmente com os seguintes comandos:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`

#### Testes End-to-End

Um teste end-to-end (E2E) é uma técnica de teste de software na qual se verifica
o funcionamento de todo o sistema, do início ao fim. Em outras palavras, é testado
o fluxo completo do software, simulando a interação da usuária com a aplicação,
para garantir que todas as partes do sistema funcionem corretamente em conjunto.

Você pode executar esses testes com o comando `npm run test:e2e` como mostrado
na imagem a seguir:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### GitHub Actions

Este repositório usa o GitHub Actions para executar automaticamente
os testes unitários, testes de critérios mínimos de aceitação e
testes end-to-end toda vez que você fizer um _push_ no ramo
_main_ do seu repositório.

Você pode verificar o resultado desta GitHub Action
na aba _Actions_ do seu repositório no GitHub,
como mostrado na seguinte imagem:

![GitHub Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "GitHub Action")

## 8. Dicas, sugestões e leituras complementares

### Prepare o seu PC para trabalhar

Antes de começar, instale o seguinte:

1. [Node.js](https://nodejs.org/pt-br/)
2. [git](https://git-scm.com/download/) Se você estiver no Linux, é provável
que já esteja instalado 👀.
Para aprender mais sobre o git, visite este [link](https://curriculum.laboratoria.la/pt/topics/scm/git)
3. Um editor de código, recomendamos o [Visual Studio Code](https://code.visualstudio.com/)

Depois, no [GitHub](https://github.com/):

1. Crie uma conta. Saiba mais sobre o GitHub neste [link](https://curriculum.laboratoria.la/pt/topics/scm/github/github)
2. Faça um _fork_ deste projeto
3. Configure sua chave SSH no GitHub. Você pode conferir este
[vídeo](https://www.youtube.com/watch?v=7YVQLZp1jb0), este
[artigo](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
ou [esse](https://www.freecodecamp.org/portuguese/news/como-obter-e-configurar-suas-chaves-ssh-do-git-e-do-github/)

Depois, em um [shell](https://curriculum.laboratoria.la/pt/topics/shell),
execute o seguinte. Se você estiver no Windows, pode usar o Git Bash:

1. Clone o _fork_ para o seu PC
2. Navegue até o diretório do projeto clonado no seu shell
3. Instale as dependências do projeto com `npm install`
4. Instale o `playwright` com `npx playwright install chromium --with-deps`
5. Para iniciar o servidor web, execute `npm start` e vá para
   `http://localhost:3000` no seu navegador.
6. Agora é só codar! :rocket:

### Recursos e tópicos relacionados

Junte-se ao canal do Slack [#project-text-analyzer-pt](https://claseslaboratoria.slack.com/archives/C067QN2GFCM)

## 9. Considerações para solicitar seu Feedback de Projeto

Antes de agendar seu Feedback de Projeto com um coach, certifique-se de que seu projeto:

- [ ] Atende a todos os critérios mínimos de aceitação ao executar `npm run test:oas`
- [ ] Atende a todos os testes unitários ao executar `npm run test`
- [ ] Atende a todos os testes _end to end_ ao executar `npm run test:e2e`
- [ ] Está livre de _erros_ do `eslint` ao executar `npm run test`
- [ ] Está hospedado no GitHub.
- [ ] Está implantado no GitHub Pages.
- [ ] Possui um README com a definição do produto.

Lembre-se de que você deve fazer uma autoavaliação dos
_objetivos de aprendizado_ e _habilidades para a vida_ em seu painel do aluno.

Se você não concluiu tudo o que foi mencionado acima, consideramos que você
não está pronta para sua sessão de Feedback de Projeto.

## 10. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/dom/1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de dados primitivos**

  <details><summary>Links</summary><p>

  * [Valores Primitivos - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadeias de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/pt/topics/javascript/strings)
  * [String — Cadeia de caracteres - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/basics/values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/basics/variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/functions/arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Design em diferentes níveis de fidelidade**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## 11. Funcionalidades opcionais

Se você terminou com todas as [funcionalidades requeridas](#4-funcionalidades),
tente implementar as seguintes funcionalidades opcionais para aprofundar nos
objetivos de aprendizado do projeto:

- Faça com que a contagem de palavras e caracteres seja 0 para uma entrada de
texto vazia.
- Faça com que a contagem de palavras e caracteres seja 0 para uma entrada de
texto contendo apenas espaços.
- Faça com que a contagem de palavras e caracteres seja 0 para uma entrada de
texto contendo apenas caracteres de pontuação.

Você pode habilitar os testes unitários e _end-to-end_ para esses casos nos
arquivos [test/analyzer.spec.js](test/analyzer.spec.js) e
[read-only/test/e2e/app.spec.js](read-only/test/e2e/app.spec.js).
Você também precisará ajustar os testes existentes para as funcionalidades requeridas.
