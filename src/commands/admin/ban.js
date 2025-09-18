// Banir usuario do servidor (apenas quando tiver permissão)

const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const banMembers = PermissionFlagsBits.BanMembers


const data = new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Seleciona um usuário e conjura El Ban')
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('Membro para banir')
            .setRequired(true)
    )
    .addStringOption(reason =>
        reason
            .setName('reason')
            .setDescription('Descreva o motivo para o banimento')
            .setRequired(false)
    )
    .setDefaultMemberPermissions(banMembers)

const banCommand = async (interaction) => {
    try {
        let target = interaction.options.getUser("target")
        let reason = interaction.options.getString("reason") ?? 'Sem Reação'
        const channel = interaction.channel;
        const embed = new EmbedBuilder()
            .setTitle('Usuario Banido!')
            .setColor('Red')
            .setDescription(`O usuário ${target} foi banido do servidor!\nMotivo:${reason}`)
            .setImage(target.avatar)
        await interaction.guild.members.ban(target);

        channel.send({
            embeds: [embed]
        })
    } catch (error) {
        console.error('Erro:', error)
        await interaction.reply({ content: 'Erro ao banir usuário.', ephemeral: true });

    }
}


module.exports = {
    data: data,
    async execute(interaction) {
        banCommand(interaction);
    },
};