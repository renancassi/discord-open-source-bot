
require("dotenv").config();
const { REST, Routes } = require('discord.js');
const TOKEN = process.env.TOKEN_BOT_DISCORD;
const ClientId = process.env.ClientId;
const GuildId = process.env.GuildId;

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Started deleting application (/) commands.');

        // Obter todos os comandos registrados
        const commands = await rest.get(
            Routes.applicationGuildCommands(ClientId, GuildId)
        );

        // Excluir cada comando
        for (const command of commands) {
            await rest.delete(
                `${Routes.applicationGuildCommands(ClientId, GuildId)}/${command.id}`
            );
            console.log(`Deleted Guild command: ${command.name}`);
        }

        console.log('Successfully deleted all application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();