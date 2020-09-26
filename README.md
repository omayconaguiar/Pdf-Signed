# Sign pdf with node

## Getting Started

### Dependencies

### Installing

* yarn install

### Executing program

* node server.js

## Author

Maycon Aguiar 

## Endpoints

Caso for rodar locamente a url é:
http://localhost:5000/
Caso for rodar no heroku:
https://uploadpdfsign.herokuapp.com/

* POST - Rota para enviar o pdf, o arquivo pfx (com sua respectiva senha). Obs: enviar arquivos nos respectivos botões.
    * http://localhost:5000/ OU https://uploadpdfsign.herokuapp.com/

* GET - Rota para receber via insomnia/postman o html. Ou se preferir só abrir o navegador com a url abaixo:
    * http://localhost:5000/ OU https://uploadpdfsign.herokuapp.com/

* GET - Rota para receber o pdf assinado, recebendo via postman/ insomnia só baixar o pdf e abrir no adobe reader que conseguirá ver a a assinatura.
    * http://localhost:5000/receive-pdf OU https://uploadpdfsign.herokuapp.com/receive-pdf

## Conclusões

Enviando um pdf e um arquivo pfx a assinatura é realizada como êxito. Caso dê algum tipo de erro, possivelmente a senha informada está errada, confira de novo e tente novamente.
