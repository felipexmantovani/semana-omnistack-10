# semana-omnistack-10
Projeto desenvolvido durante a 10 semana omnistack da Rocketseat.

## Instalação

> Back-end
**Node.js**

```
cd backend
yarn install
yarn dev
```

- Para configurar o MongoDB na aplicação edite o arquivo src/**index.js** alterando as variáveis: **user**, **password** e **db**.
[https://cloud.mongodb.com/]

> Front-end web
**ReactJS**

```
cd web
yarn install
yarn start
```

> Front-end mobile
**React Native**

```
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```

- Para testar altere no arquivo **src/services/api.js** o valor da **baseURL** para o endereço do seu servidor ou localhost.