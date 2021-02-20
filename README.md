## Guia de instalacao Mock Login

### Instalacoes dos Requisitos minimos
 - [Git](https://git-scm.com/downloads)
 - [NodeJS](https://nodejs.org/en/download/package-manager/)
 - [NextJS](https://nextjs.org/docs/getting-started)

### Requisitos minimos:
 - Sitema operacional Linux*, Windows ou OSX
 - Ter o git instalado em sua maquina
 - Ter instalado o javascript runtime NodeJS na versao 14.15.5 LTS
 - Ter instalado a framework NextJS (pelo gerenciador de pacotes NPM incluso com a instalcao do NodeJS)
 - Opcional, ter instalado em sua maquina o gerenciador de pacotes Yarn.


### Instalando o Mock Login
 - Abra o terminal de comandos da sua maquina.
 - Clone o repositorio usando o comando ``` git clone https://github.com/joaop-oliveira1/wiser.mock.login.git```.
 - Execute o comando ```cd wiser.mock.login``` no diretorio cujo o projeto foi clonado.
 - instale o projeto usando um dos dois comandos:
 - ``yarn install`` ou ```npm i```


### Rodando o Projeto
- Crie um arquivo com nome ```.env.local``` no diretorio raiz do projeto(diretorio onde a pasta src esta localizada), com o seguinte conteudo:
  ```NEXT_PUBLIC_BASE_URL="https://602dded096eaad00176dcddd.mockapi.io/"```
  ```NEXT_PUBLIC_API_VERSION="v1"```
- Inicie o projeto em desenvolvimento usando o comando ```npm run dev``` ou ```yarn dev```
- Usando seu navegador acesse o endereco ```http://127.0.0.1:3000```

---
*Testado somente em sistemas da familia debian.
