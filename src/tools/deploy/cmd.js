// src/tools/deploy/command.js
const path = require("node:path");
require("dotenv").config(); // carrega .env

const args = process.argv.slice(2); // pega os argumentos passados
const action = args[0]; // 'deploy' ou 'delete'
const type = args[1];   // 'guild' ou 'global'

if (!action || !type) {
  console.error("Uso: npm run cmd <deploy|delete> <guild|global>");
  process.exit(1);
}

const validActions = ["deploy", "delete"];
const validTypes = ["guild", "global"];

if (!validActions.includes(action)) {
  console.error("Ação inválida. Use 'deploy' ou 'delete'.");
  process.exit(1);
}

if (!validTypes.includes(type)) {
  console.error("Tipo inválido. Use 'guild' ou 'global'.");
  process.exit(1);
}

// Mapeia os arquivos corretos usando caminhos absolutos
const files = {
  deploy: {
    guild: path.join(__dirname, "guild/deploy-guild-commands.js"),
    global: path.join(__dirname, "global/deploy-global-commands.js")
  },
  delete: {
    guild: path.join(__dirname, "guild/delete-guild-commands.js"),
    global: path.join(__dirname, "global/delete-global-commands.js")
  }
};

// Executa o módulo
require(files[action][type]);