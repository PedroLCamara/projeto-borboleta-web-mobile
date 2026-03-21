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
- Tutorial

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

## Tutorial do Codigo
---

### 1. Cabeçalho do Site (Header)
*   **Menu de Navegação:** Implementado via `<nav>` dentro do `<header>`, contém os links de ancoragem e navegação externa.

### 2. Introdução
*    A seção de introdução foi desenvolvida para apresentar as principais informações da instituição. Além disso, contém um botão que direciona o usuário para a área de agendamento de conserto de equipamentos de deficientes visuais.

### 3. Galeria

*    A galeria foi estruturada utilizando duas `<section>`: uma principal, responsável por separar essa área das demais seções do site, e outra interna, destinada à organização e exibição das imagens.

### 4. Eventos
*    A seção de eventos foi organizada com uma `<section>` principal que engloba todo o conteúdo. Dentro dela, há uma `<section>` secundária responsável por estruturar as informações dos eventos. Cada evento é representado por uma `<section>` própria, contendo duas subdivisões: uma para o conteúdo informativo (texto) e outra para a exibição da imagem correspondente.
*    Na etapa de estilização, as sectios foram nomeadas de forma intuitiva com o elemento `class`, com excessão da `<section>` principal que foi nomeada com `#eventos`, além disso, foi implementada uma `flexbox` em cada "card" de evento (`.card_evento`) da seção para organizar os conteúdos visuais (`.img_card_evento`) e textuais (`.escrita_card_evento`)

### 5. Depoimentos dos Eventos
*    A área de depoimentos foi estruturada com uma `<section>` principal. Em seu interior, há uma `<section>` dedicada à organização dos comentários.
Cada depoimento é composto por uma section individual, que contém duas partes: uma para a imagem do usuário e outra para o comentário, acompanhado do nome da pessoa.
*    Na etapa de estilização, de forma semelhante a `<section>` anterior, foram implementadas duas `flexbox`: uma para dividir os comentários lado a lado e outra para osganizar o conteúdo escrito e a foto de perfil do escritor. Sua `<section>` principal foi nomeada com o `id #eventos-comentarios`, a `flexbox principal` foi chamada de `#flex_comentarios`, e a `flexbox secundária` (para a organização visual do comentário) foi chamada de `.card_comentarios`, ela se divide nas `<section>s` `.img_comentarios` e `.escrita_comentarios`.
  
### 6. Locais
*    A seção de locais foi organizada com uma `<section>` principal. Dentro dela, há duas subdivisões: uma `<section>` destinada ao título e ao texto informativo, e outra voltada para a exibição da imagem correspondente.

### 7. Rodapé
*    O rodapé foi estruturado utilizando duas `<section>`: uma destinada à exibição da logo e de um texto descritivo, e outra dedicada à apresentação dos nomes dos desenvolvedores.
