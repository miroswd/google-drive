

```shell
npm init --y @miroswd # colocando o autor do projeto
```

```shell
npm rm nodemon # removendo uma lib
```


### JEST

```shell
npx jest --init
```

- No arquivo jest.config.mjs (mjs -> consegue interpretar o import/exports)
- Seleciono todos os comentários com '//' e com `ctrl` + `shift` + `k`, eu deleto todas as linhas

- Configuração do script para rodar os testes:                                                

```json 
{
  "test": "NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand",
  "test:watch": "NODE_OPTIONS=--experimental-vm-modules npx jest --watch --runInBand",
  "test:cov": "NODE_OPTIONS=--experimental-vm-modules npx jest --no-cache --runInBand --coverage"
}
```