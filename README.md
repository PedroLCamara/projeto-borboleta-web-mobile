# Projeto Extensionista - Sistema de gerenciamento para o Centro de Informação à pessoa com deficiência
Integrantes:
- Pedro Lucas Câmara Rodrigues Lopes - 10753510
- Luana de Paiva Brito - 10750121
- Louisy Dalchiavon Tomazi - 10755895
- Murilo Arevalo - 10743851
- Victor Pereira - 10755205

## Sumário
- Introdução / Ideação
- Protótipo
- Tutorial de Telas
- Tutorial do Código

## Ideação
A ideia do nosso projeto veio pela denúncia de uma das integrantes do grupo frente a falta de divulgação de um importantíssimo projeto do governo, o "Centro de Informação à pessoa com deficiência". O projeto busca divulgar a existência do projeto, ampliar sua relevância e auxiliar os profissionais envolvidos em tarefas administrativas, como na coleta e preenchimento eletrônico de formulários para requisitar o serviço de manutenção de aparelhos fornecido pelo projeto. 
Para resolver estes problemas, o projeto será composto por:
- Uma landing page introdutória, com visual moderno e acessível
- Uma página de formulário para o agendamento dos consertos
- Uma visualização em calendário, com status de aceitação e dados informados, para os consertos agendados (visando acesso administrativo apenas)

O caráter extensionista tem o objetivo de atingir a comunidade de pessoas com deficiência (cegos/baixa visão e pessoas com restrição de mobilidade, principalmente), pois o conhecimento dessa Central de Informação é muito raro, geralmente apenas funcionários do metrô das estações Santa Cruz, Tatuapé e Barra Funda divulgam essas informações oralmente. Além do desconhecimento desse auxílio do governo, as pessoas que o conhecem não possuem acesso aos dias de funcionamento do recurso, o que resulta em viagens perdidas ou necessidade de deslocamento a uma rota completamente diferente do caminho planejado pela pessoa.
Visto a dificuldade de locomoção dessas pessoas, a falta dessas informações e de facilidade de comunicação com esses serviços acaba se tornando um empencílio à essa comunidade. A proposta se torna parte do nosso cotidiano por um dos integrantes trabalhar na operação da estação de metrô "Santa Cruz", tendo contato com o público todos os dias.

## Protótipo Tela Inicial

<img src="docs/design/wireframe/Tela_Inicial.png">

## Tutorial de Telas
---

O site possui **duas telas principais** que o usuário pode acessar:

### Tela 1 — Página Inicial (`index.html`)
Esta é a landing page do projeto. Ela apresenta todas as informações sobre o Centro de Informação à Pessoa com Deficiência, organizada nas seguintes seções visíveis ao usuário:
1. **Cabeçalho (Header):** Menu de navegação com links para as seções da página e um botão "Entrar" (funcionalidade de login em desenvolvimento — exibe um modal de aviso ao ser clicado).
2. **Introdução:** Texto de boas-vindas e um botão **"Agendar reparo!"**. Ao clicar nesse botão, o usuário é direcionado para a **Tela 2 (Calendário)**, onde poderá preencher um formulário para agendar o conserto do seu equipamento.
3. **Sobre Nós:** Texto explicando a missão e os serviços do centro.
4. **Galeria:** Fotos das fachadas dos centros de atendimento.
5. **Eventos:** Notícias e eventos relacionados ao CIPCD, com botão "Ver mais" para expandir o texto.
6. **Comentários:** Depoimentos de pessoas que já utilizaram os serviços.
7. **Locais:** Endereços e telefones das três unidades (Barra Funda, Tatuapé e Santa Cruz).
8. **Rodapé:** Logo, citação e créditos dos desenvolvedores.

### Tela 2 — Calendário de Reparos Agendados (`calendar.html`)
Esta tela é acessada ao clicar no botão **"Agendar reparo!"** da página inicial. Ela apresenta:
1. **Cabeçalho (Header):** Mesmo menu de navegação da página inicial, permitindo voltar para a Home.
2. **Calendário semanal:** Uma visualização em formato de grade com os 7 dias da semana (Domingo a Sábado). O usuário pode navegar entre as semanas usando as setas de anterior/próximo. Cada dia exibe os agendamentos de conserto marcados para aquela data. Futuramente, esta tela conterá também o formulário de agendamento, onde o usuário poderá informar seus dados e solicitar o reparo do equipamento.
3. **Rodapé:** Mesmo rodapé da página inicial.

**Fluxo do usuário:** Página Inicial → clica em "Agendar reparo!" → é levado para a tela do Calendário (`calendar.html`) → visualiza os dias disponíveis e agenda seu conserto.

## Tutorial do Código
---

## 1. Cabeçalho do Site (Header)

* **Menu de Navegação:** Implementado via `<nav>` dentro do `<header>`, contém links de ancoragem e navegação externa. No processo de estilização, separamos uma `<section>` para a logo, outra para o menu em telas maiores e mais uma para telas com largura de, no máximo, 900px. Abaixo está a separação das seções

```html
 <header>
        <nav class="menu">
            <section class="logo">
            </section>
            <section class="menu-list">
            </section>
            <section class="menu-btn">
            </section>
            <section class="mobile-menu-icon">
            </section>
        </nav>
        <section class="mobile-menu ">
            
            <section class="menu-btn">
            </section>
        </section>
    </header>
```


*  No arquivo `style.css`, foi utilizado o conceito de Flexbox para organizar os blocos do menu, e o menu responsivo já foi implementado por meio de `@media` e JavaScript.
```css
.menu{
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 6rem;
}

@media (max-width: 900px){...}
```
*  Para que a responsividade funcione, foi adicionada a tag `<button onclick="menuShow()"><img class="icon" src="imagens/menu.svg"></button>`. Assim, ao clicar nesse botão, a função `menuShow()` é chamada e exibe a navegação horizontal.
```html
<section class="mobile-menu-icon">
  <button onclick="menuShow()"><img class="icon" src="imagens/menu.svg"></button>
</section>
```

```javascript
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu.svg"

    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close.svg"
    }
}
```

### 1.1 Modal de Aviso (Botão "Entrar")

*    Na página inicial, o botão "Entrar" do menu **não** direciona para uma página de login. Em vez disso, ele abre um **modal (pop-up)** avisando que a funcionalidade de login ainda está em desenvolvimento. O modal é implementado no arquivo `modal.js`.
*    O HTML do modal fica dentro da `<section class="menu-btn">` no header, usando uma `<div>` com a classe `.modal-overlay` e `.modal-content`:

```html
<div id="modalAviso" class="modal-overlay" style="display: none;">
    <div class="modal-content">
        <span id="closeAviso" class="close-btn">&times;</span>
        <div class="modal-body">
            <h3>Funcionalidade em Desenvolvimento</h3>
            <p>O sistema de login ainda não está pronto. Estamos trabalhando nisso!</p>
            <button id="btnOk" class="confirm-btn">Entendido</button>
        </div>
    </div>
</div>
```

*    No JavaScript (`modal.js`), o botão "Entrar" (`#btnEntrar`) abre o modal, e os botões de fechar (`#closeAviso`, `#btnOk`) ou o clique fora do modal o fecham:

```javascript
const modal = document.getElementById("modalAviso");
const btnEntrar = document.getElementById("btnEntrar");
const btnClose = document.getElementById("closeAviso");
const btnOk = document.getElementById("btnOk");

btnEntrar.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

const fecharModal = () => modal.style.display = "none";

btnClose.onclick = fecharModal;
btnOk.onclick = fecharModal;

window.onclick = (event) => {
    if (event.target == modal) {
        fecharModal();
    }
};
```

### 2. Introdução
*    A introdução foi implementada com a tag `<article id="introducao">` (em vez de `<section>`), pois representa um bloco de conteúdo independente e autocontido. Ela apresenta as principais informações da instituição e contém um botão **"Agendar reparo!"** que direciona o usuário para a página do calendário (`calendar.html`), onde futuramente será possível preencher o formulário de agendamento de consertos.

### 2.1 Sobre Nós
*    Assim como a introdução, o bloco "Sobre Nós" também utiliza a tag `<article id="texto-sobre-nos">`, já que seu conteúdo é um texto independente que explica a missão e os serviços do centro. Ele é organizado em parágrafos com `text-align: justify` e centralizado com `width: 60%` e `margin: 0 20%`.

### 3. Galeria

*    A galeria foi estruturada utilizando duas `<section>`: uma principal, responsável por separar essa área das demais seções do site, e outra interna, destinada à organização e exibição das imagens. As imagens são dispostas em um `grid` de 4 colunas usando CSS Grid (`.galeria-imgs`), com `border-radius` arredondado e `object-fit: cover` para manter a proporção.

### 4. Eventos
*    A seção de eventos foi organizada com uma `<section id="eventos">` principal que engloba todo o conteúdo. Dentro dela, há uma `<section>` secundária responsável por estruturar as informações dos eventos. Cada evento é representado por uma `<section class="card_evento">` própria, contendo duas subdivisões: um `<article class="escrita_card_evento">` para o conteúdo informativo (texto) e uma `<section class="img_card_evento">` para a exibição da imagem correspondente. A tag `<article>` foi escolhida para o texto de cada evento porque cada notícia é um conteúdo independente e autocontido, seguindo a mesma lógica semântica aplicada na introdução e no "Sobre Nós".
*    Na etapa de estilização, as tags foram nomeadas de forma intuitiva com o elemento `class`, com exceção da `<section>` principal que foi nomeada com `#eventos`, além disso, foi implementada uma `flexbox` em cada "card" de evento (`.card_evento`) da seção para organizar os conteúdos visuais (`.img_card_evento`) e textuais (`.escrita_card_evento`).
*    Foi empregada a função `revelaTxt(btn)` no botão "Ver mais"/"Ver menos". A tela inicialmente mostra um texto de amostra dos eventos, ao clicar no botão, ele mostra o evento/notícia completa na página.
```html
   <button onclick="revelaTxt(this)">Ver mais</button>
```
```javascript
   function revelaTxt(btn){
    let sect = btn.parentElement;
    let sectAmostra = sect.querySelector(".amostra");
    let sectHide = sect.querySelector(".hide");

    //para o programa pegar o status da tela, e não o q é atribuido no código
    let status = window.getComputedStyle(sectHide).display !== "none"; //bool

    sectHide.style.display = (status)? "none":"block";
    sectAmostra.style.display = (sectHide.style.display == "none")? "block":"none";

    btn.textContent = (btn.textContent == "Ver mais")? "Ver menos":"Ver mais";
}
```

### 5. Depoimentos dos Eventos
*    A área de depoimentos foi estruturada com uma `<section>` principal. Em seu interior, há uma `<section>` dedicada à organização dos comentários.
Cada depoimento é composto por uma section individual, que contém duas partes: uma para a imagem do usuário e outra para o comentário, acompanhado do nome da pessoa.
*    Na etapa de estilização, de forma semelhante a `<section>` anterior, foram implementadas duas `flexbox`: uma para dividir os comentários lado a lado e outra para organizar o conteúdo escrito e a foto de perfil do escritor. Sua `<section>` principal foi nomeada com o `id #eventos-comentarios`, a `flexbox principal` foi chamada de `#flex_comentarios`, e a `flexbox secundária` (para a organização visual do comentário) foi chamada de `.card_comentarios`, ela se divide nas `<section>s` `.img_comentarios` e `.escrita_comentarios`.
  
### 6. Locais
*    A seção de locais foi organizada com uma `<section>` principal. Dentro dela, há duas subdivisões: uma `<section>` destinada ao título e ao texto informativo, e outra voltada para a exibição da imagem correspondente.

### 7. Rodapé
*    O rodapé foi estruturado utilizando duas `<section>`: uma destinada à exibição da logo e de um texto descritivo, e outra dedicada à apresentação dos nomes dos desenvolvedores.

## 8. Calendário de Reparos (`calendar.html` + `calendar.js` + `calendar.css`)

*    A tela do calendário exibe os agendamentos de conserto em formato de **grade semanal** (Domingo a Sábado). O layout é feito com CSS Grid de 7 colunas (`.container-data-items`), onde cada coluna representa um dia da semana.

*    No topo, há uma barra com o **intervalo de datas** da semana atual (ex: `30/3/2026 - 5/4/2026`) e dois botões de seta para navegar entre semanas (anterior e próxima).

*    O JavaScript (`calendar.js`) calcula automaticamente o início e fim da semana com base na data atual, e a função `setDateViz(increment)` atualiza a visualização. Quando `increment` é `0`, mostra a semana atual; `-1` volta uma semana; `+1` avança uma semana:

```javascript
const dayInMiliseconds = 1000 * 60 * 60 * 24;
const currDate = new Date();
const currDayOfWeek = currDate.getDay();

let initDate = new Date(currDate.getTime() - (currDayOfWeek * dayInMiliseconds));
let endDate = new Date(initDate.getTime() + (6 * dayInMiliseconds));

function setDateViz(increment = 0) {
    initDate.setTime(initDate.getTime() + (7 * dayInMiliseconds * increment));
    endDate.setTime(endDate.getTime() + (7 * dayInMiliseconds * increment));
    // Atualiza os textos de data e o conteúdo de cada dia
}
```

*    Os botões de navegação usam `addEventListener` para chamar a função com o incremento correto:

```javascript
prevDateBtn.addEventListener('click', () => setDateViz(-1));
nextDateBtn.addEventListener('click', () => setDateViz(1));
```

*    Na estilização (`calendar.css`), cada dia da semana tem um cabeçalho azul (`h3`) com o nome do dia, e abaixo um retângulo claro (`.ditems-rect`) onde os agendamentos serão exibidos. O layout responsivo mantém a grade legível em diferentes tamanhos de tela.

## Conclusão — Conhecimentos Adquiridos
---

O desenvolvimento deste projeto proporcionou ao grupo uma experiência prática e completa com as três tecnologias fundamentais do desenvolvimento web: **HTML, CSS e JavaScript**. Abaixo estão os principais conhecimentos consolidados ao longo do processo:

**HTML Semântico:** Aprendemos a importância de escolher as tags certas para cada situação. Em vez de usar `<div>` para tudo, utilizamos tags como `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` e `<article>`, cada uma com seu papel. A troca de algumas `<section>` por `<article>` (na introdução, no "Sobre Nós" e nos cards de eventos) nos ensinou que `<article>` é ideal para conteúdos independentes e autocontidos — ou seja, blocos que fazem sentido sozinhos — enquanto `<section>` serve para agrupar conteúdos relacionados dentro de um contexto maior.

**CSS Flexbox e Grid:** Praticamos dois dos sistemas de layout mais importantes do CSS moderno. O Flexbox foi utilizado no menu de navegação, nos cards de eventos e nos depoimentos para organizar elementos em linha ou coluna de forma flexível. Já o CSS Grid foi aplicado na galeria de imagens (grade de 4 colunas) e no calendário semanal (grade de 7 colunas), mostrando como o Grid é ideal para layouts em duas dimensões com linhas e colunas bem definidas.

**Responsividade com Media Queries:** Implementamos um menu responsivo que se adapta a telas menores (até 900px), escondendo o menu padrão e exibindo um menu mobile com ícone de hambúrguer. Isso nos ensinou como usar `@media` para criar regras de CSS que só funcionam em determinados tamanhos de tela, garantindo que o site seja acessível tanto em computadores quanto em celulares.

**JavaScript e Manipulação do DOM:** Desenvolvemos diversas funcionalidades interativas usando JavaScript puro, sem nenhuma biblioteca externa. Entre os principais aprendizados estão: a função `menuShow()` que adiciona e remove classes CSS para abrir/fechar o menu mobile; a função `revelaTxt()` que alterna a visibilidade de textos usando `window.getComputedStyle()` para ler o estado real do elemento na tela; e a lógica do calendário com cálculos de datas usando o objeto `Date`, milissegundos e criação dinâmica de elementos com `document.createElement()`.

**Variáveis CSS (Custom Properties):** Utilizamos variáveis CSS (`:root`) para definir as cores do projeto de forma centralizada (como `--primary`, `--light`, `--dark`), facilitando a manutenção e a consistência visual do site inteiro. Quando é preciso mudar uma cor, basta alterar em um único lugar.

**Organização e Estrutura de Projeto:** O projeto nos ensinou a separar responsabilidades em arquivos diferentes: `index.html` e `calendar.html` para as páginas, `style.css` e `calendar.css` para os estilos, e `script.js`, `modal.js` e `calendar.js` para os comportamentos. Essa separação torna o código mais fácil de entender, manter e trabalhar em equipe.

**Impacto Social e Extensão:** Além dos conhecimentos técnicos, o projeto reforçou a importância de usar a tecnologia como ferramenta de inclusão social. Ao criar um site acessível para o CIPCD, aplicamos na prática o conceito de que o desenvolvimento web não é apenas sobre código — é sobre resolver problemas reais e facilitar a vida das pessoas.
