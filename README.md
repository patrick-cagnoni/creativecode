# Teste CreativeCode

Esse projeto faz buscas na API do github e dispõe em um SPA feito em React.

## Instruções

### 1) Clone e instale as dependências

- git clone https://github.com/patrick-cagnoni/creativecode.git
- `cd creativecode`
- `npm install` ou `yarn install` para instalar as dependências

### 2) Obtenha o token de acesso

Para que o App possa puxar dados da api, ele necessita do token de acesso do Github.

Faça o login da sua conta Github, acesse a opção settings > Developer settings > Personal access tokens. Clique no botão "Generate new token" e defina as opções de acesso. Salve o token.

### 3) Insira o token de acesso

Acesse o arquivo .env na raiz do projeto e insira o seu token na variável REACT_APP_TOKEN

### 4) Inicie o App

`npm run serve`

`yarn serve`
