------- ENGLISH ---------

# Photographer-Portfolio-Stephanie-Lopes
## Analog photography portfolio
**Author: Stephanie Lopes

This project is my final MVP of Sprint 2 of the Basic Full Stack Development course at PUC RIO, 2024.

Objective: Creation of a personal website to promote analog photographs and to serve as a contact field for work partnerships. Using a personal website as a portfolio eliminates the need for generic portfolio websites and sends a message of greater professionalism and trust to clients and partners.

The user interface design and the prototype of interactivity between pages and resources can be accessed through the following link from Figma, an interface design tool.

Figma: https://www.figma.com/design/hwFy6pRp8jupjQUNIQofFF/MVP?node-id=47-2&node-type=canvas&t=0zJBq6oVOJN5ug9U-0

To simulate interactions in the prototype, use the dimensions 1680 x 1100.

##How it Works

The project functions as a showcase of photographs, divided into albums, the presentation of the author of the photographs and a contact form.

The project pages:
```
About.js - Page with information about the portfolio author
AlbumDetails.js - Page to display all the photos in the albums
ContactPage.js - Page with a form to contact the author
InicialPage.js - Website home page
PortfolioPage.js - Page with a list of all albums
```
And also, eight components:
```
Banner.jsx - Used on 2 pages and serves as a marketing call to action for clients and partners.
ContactForm.jsx - Used on 1 page, for a contact form.
FooterMenu.jsx - Used on all 5 pages.
Header.jsx - Used on all 5 pages.
HeroSection.jsx - Used on 1 page, to present the website.
Item.jsx - Used on 2 pages, to create the albums card and the interactivity of clicking on the album and viewing the expanded album.
MenuOverlay.jsx - Used on all 5 pages
Portfolio.jsx - Used on 2 pages, to display the albums.
```
The data that feeds the portfolio, the photographs used, are in the albumsCollection.json file. The albums structure is defined in the following structure:
```
"albums": [
{
"id": 1,
"title": "LIFE IN Japan",
"image": "/assets/images/japan_life/007.jpg",
"photos": [
{
"src": "/assets/images/japan_life/001.jpg",
"name": "Image 1"
},
{
"src": "/assets/images/japan_life/002.JPG",
"name": "Image 2"
},
.
.
.
{
"src": "/assets/images/ALBUM_X/FOTO_XXX.JPG",
"name": "Imagem XXX"
}
```
Following the sequential numbering pattern, where I put the Xs in the last lines.

**The data is called by the InicialPage.js page, componentized by the Item.jsx and Portfolio,jsx files and displayed by the PortfolioPage.js page.

## How to run

To run the project, first, it must contain the folders listed below.
```
public
src
```
And the subfolders:
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
Before running, it is necessary to install the npm package manager, the react-bootstrap framework and the sass styles package.

Install the Node.js runtime environment:
```
npm install
```
Install the React-bootstrap framework:
```
npm install react--bootstrap bootstrap
```
Install the sass package:
```
npm install sass
```
Run the application:
```
npm start
```
## Instructions for use

After successfully running the project, you will be able to explore the website pages. The pages are:
```
1. Home
2. Portfolio
2.1 Album 1: "Life in Japan"
2.2 Album 2: "Cultural Events"
2.3 Album 3: "Birthday"
2.4 Album 4: "Life in Brazil"
3. About
4. Contact
5. Overlay menu (Access to other pages]
```
The main path to reach the photos is:
```
Home > Portfolio Album > Click on an album > Photos
```
All other pages can be easily accessed through the overlay menu, which is available in the upper right corner of all pages, or through the Footer, present at the end of all pages.


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

Os dados que alimentam o portfólio, as fotografias usadas, estão no arquivo albunsCollection.json. A estrutura dos álbuns está definida na estrutura:
```
"albuns": [
        {
            "id": 1,
            "title": "LIFE IN Japan",
            "image": "/assets/images/japan_life/007.jpg",
            "photos": [
                {
                    "src": "/assets/images/japan_life/001.jpg",
                    "name": "Imagem 1"
                },
                {
                    "src": "/assets/images/japan_life/002.JPG",
                    "name": "Imagem 2"
                },
                            .
                            .
                            .
                {
                    "src": "/assets/images/ALBUM_X/FOTO_XXX.JPG",
                    "name": "Imagem XXX"
                }
```
Seguindo o padrão de númeração sequencial, onde coloquei os Xs nas últimas linhas.

**Os dados são chamados pela página InicialPage.js, componentizados pelos arquivos Item.jsx e Portfolio,jsx e exibidos pela página PortfolioPage.js.**

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

Instalar o ambiente de execução Node.js:
```
npm install
```
Instalar o framework React-bootstrap:
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
