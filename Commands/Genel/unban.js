const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban') // Komut adı
        .setDescription('Belirtilen kullanıcının yasağını kaldırır.')
        .addStringOption(option => 
            option.setName('kullanıcıid') // Parametre adı
                .setDescription('Yasağı kaldırılacak kullanıcının ID numarası.')
                .setRequired(true)), // Kullanıcı ID'si zorunlu
    async execute(interaction) {
        const userId = interaction.options.getString('kullanıcıid'); // Yasağı kaldırılacak kullanıcının ID'si

        try {
            await interaction.guild.members.unban(userId); // Kullanıcının yasağını kaldır
            await interaction.reply(`Kullanıcının yasağı başarıyla kaldırıldı. ID: ${userId}`);
        } catch (error) {
            await interaction.reply('Bu ID numarasına sahip bir kullanıcı yasaklanmamış olabilir veya geçersiz bir ID girdiniz.');
        }
    },
};
