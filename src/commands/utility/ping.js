const { SlashCommandBuilder } = require("discord.js");

const pingCommand = async (interaction) => {
    await interaction.reply(`Pong!\nLatência: ${interaction.client.ws.ping}ms`);
};

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Basic Ping Command"),
    async execute(interaction) {
        pingCommand(interaction);
    },
};