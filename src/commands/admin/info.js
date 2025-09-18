const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const calculateMemberTime = require("./utils/calculateMemberTime");

const data = new SlashCommandBuilder()
    .setName('info')
    .setDescription('Informações de um usuário')
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('Membro para informações')
            .setRequired(true)
    )

const infoCommand = async (interaction) => {
    try {
        let target = interaction.options.getUser("target")

        const guild = interaction.guild;
        const member = await guild.members.fetch(target.id);
        const fullUser = await interaction.client.users.fetch(target.id, { force: true });
        //console.log(fullUser)
        const isBot = target.bot ? '- [App]' : '';
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const joinedDate = new Date(member.joinedTimestamp).toLocaleString(undefined, options); // converte timestamp
        const duration = calculateMemberTime(member.joinedTimestamp);
        const targetName = (target.globalName) ? target.globalName : target.username;
        const banner = (fullUser.bannerURL) ? fullUser.bannerURL({ dynamic: true, size: 4096 }) : null;

        const embed = new EmbedBuilder()
            .setTitle(`${targetName} ${isBot}`)
            .setColor('Orange')
            .setThumbnail(target.displayAvatarURL({ extension: "png", size: 1024 }))
            .addFields(
                { name: 'Nome de usuário: ', value: target.username },
                { name: 'Entrou em: ', value: joinedDate, inline: true },
                { name: 'Membro há:', value: `${duration.days} dias e ${duration.hours} horas`, inline: true }
            )
            .setFooter({ text: `${target.id}` })

        if (banner) {
            embed.setImage(banner);
        }

        await interaction.reply({
            embeds: [embed]
        });
    } catch (error) {
        console.error('Erro:', error)
        await interaction.reply({ content: 'Erro ao buscar informações do usuário.', ephemeral: true });
    }
}


module.exports = {
    data: data,
    async execute(interaction) {
        infoCommand(interaction);
    },
};