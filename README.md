# Discord Open Source Bot - (DOSBot)

## Projeto

O DOSBot é um BOT gratuito e opensource focado em admnistração de servidores.

## Tecnologias

- Javascript
- Node.js
- Discord.js

## Configurando o projeto

Instale as dependências:

```bash
npm install
```

Insira o token do seu bot no arquivo `.env.example` e, em seguida, remova a extensão ".example" do nome do arquivo.

## Rodando o projeto

Alguns scripts foram definidos no package.json, use conforme sua necessidade:

Deploy dos comandos (Global)

```bash
npm run cmd deploy global
```

Deploy dos comandos (Servidor/Guild)

```bash
npm run cmd deploy guild
```

Remover os comandos (Global)

```bash
npm run cmd delete global
```

Remover os comandos (Servidor/Guild)

```bash
npm run delete guild
```

Iniciar o bot

```bash
npm run start
```

## Roadmap

- Conexão com Banco de Dados
- Configuração Persistente de Warns
- Configuração Persistente de Canais e Roles

## Funcionalidades

Funcionalidades que já existem

- info: Informações sobre um determinado usuário.
- ban: Bane um determinado usuário do servidor.

## FAQ

#### O que é esse bot?

É um bot **open source** voltado para **administração de servidores Discord**, trazendo comandos de moderação, utilitários e informações sobre membros.

#### Quais permissões o bot precisa?

O bot funciona melhor com a permissão **Administrador**.  
Mas, se preferir limitar, as principais permissões são:

- Gerenciar mensagens
- Banir usuários
- Expulsar usuários
- Visualizar canais

#### Não sou um desenvolvedor, como posso sugerir novas funcionalidades?

Você pode sugerir ideias e melhorias na aba “Issues” do GitHub ou na aba "Ajuda" do Discord.

#### O bot é seguro para ser usado?

Sim, o código é aberto, o que permite que você revise toda a lógica do bot. Recomendamos não compartilhar seu token ou informações sensíveis.
