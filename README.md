------- PORTUGUESE ---------

# Photographer-Portfolio-Stephanie-Lopes
## Portfólio de fotografia analógica
**Autor: Stephanie Lopes**

Este projeto é o meu MVP final da Sprint 2 do curso de Desenvolvimento Full Stack Básico da PUC RIO, 2024.

Objetivo: Criação de website pessoal para divulgação de fotografias analógicas e campo de contato para parcerias de trabalho. O uso de uma website pessoal como portfólio exclui a necessidade do uso de websites genéricos de portfólio e emite uma mensagem de maior profissionalismo e confiança para clientes e parceiros.

O design da interface de usuário e o protótipo de interatividade entre as páginas e recursos podem ser acessados pelo link a seguir do Figma, ferramenta de design de interface.

Figma: https://www.figma.com/design/hwFy6pRp8jupjQUNIQofFF/MVP?node-id=47-2&node-type=canvas&t=0zJBq6oVOJN5ug9U-0

Para simulação das intereções no protótipo, utilizar as dimensões 1680 x 1100.

## Como Funciona

O projeto funciona como uma vitrine de fotografias, divididas em álbuns, a apresentação da autora das fotografias e um formulário para contato.

As páginas do projeto:
```
About.js - Página com informações sobre a autora do portfólio
AlbumDetails.js - Página para exibição de todas as fotografias dos álbuns
ContactPage.js - Página com formulário para contato com a autora
InicialPage.js - Página inicial do website
PortfolioPage.js - Página com a lista de todos os álbuns
```

E também, oito componentes:
```
Banner.jsx - Utilizado em 2 páginas e serve para chamada de marketing para cliente e parceiros.
ContactForm.jsx - Utilizado em 1 página, para formulário de contato.
FooterMenu.jsx - Utilizado em todas as 5 páginas.
Header.jsx - Utilizado em todas as 5 páginas.
HeroSection.jsx - Utilizado em 1 página, para apresentação do website.
Item.jsx - Utilizado em 2 páginas, para crianção do card os álbuns e da interatividade de clicar no álbum e visualizar o álbum expandido.
MenuOverlay.jsx - Utilizado em todas as 5 páginas
Portfolio.jsx - Utilizado em 2 páginas, para mostragem dos álbuns.
```

## Como executar

Para executar o projeto, primeiramente, deve conter as pastas listadas abaixo.
```
public
src
```
E as sub pastas:
```
public
    - assets
        - images
            - birthday
            - brasil_life
            - cultural_events
            - japan_life
src
    - assets
        - fonts
        - icons
        - images
    - components
    - pages
```

Antes de executar, é necessário instalar o gerenciador de pacotes npm, o framework react-bootstrap e o pacote de estilos sass.

Instalar do gerenciador de pacotes npm:
```
npm install
```
Instalar o framework bootstrap:
```
npm install react--bootstrap bootstrap
```
Instalar o pacote sass:
```
npm install sass
```
Executar a aplicação:
```
npm start
```

## Instruções de uso

Após a execução com sucesso do projeto, será possível explorar as páginas do website. As páginas são:

```
1. Home
2. Portfolio
    2.1 Album 1: "Life in Japan"
    2.2 Album 2: "Cultural Events"
    2.3 Album 3: "Birthday"
    2.4 Album 4: "Life in Brazil"
3. About
4. Contact
5. Menu sobreposto (Acesso às demais páginas]
```

Os principal caminho para alcançar as fotos é:
```
Home > Album do Portfolio > Clique em um álbum > Fotos
```
Todas as demais páginas podem ser facilmente acessadas pelo menu sopreposto, que está disponível no canto direito superior em todas as páginas, ou pelo Footer, presente no final de todas as páginas.
