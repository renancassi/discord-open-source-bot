require("dotenv").config();
const TOKEN = process.env.TOKEN_BOT_DISCORD;
const ClientId = process.env.ClientId;

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Started deleting application (/) commands.');

        // Obter todos os comandos registrados
        const commands = await rest.get(
            Routes.applicationCommands(ClientId)
        );

        // Excluir cada comando
        for (const command of commands) {
            await rest.delete(
                `${Routes.applicationCommands(ClientId)}/${command.id}`
            );
            console.log(`Deleted Global command: ${command.name}`);
        }

        console.log('Successfully deleted all application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();