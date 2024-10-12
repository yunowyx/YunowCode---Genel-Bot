const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban') // Komut adı
        .setDescription('Belirtilen kullanıcıyı sunucudan yasaklar.')
        .addUserOption(option => 
            option.setName('kullanıcı') // Parametre adı
                .setDescription('Yasaklanacak kullanıcıyı seçin.')
                .setRequired(true)) // Kullanıcı seçimi zorunlu
        .addStringOption(option =>
            option.setName('sebep')
                .setDescription('Yasaklama sebebini belirtin.')
                .setRequired(false)), // Sebep belirtmek isteğe bağlı
    async execute(interaction) {
        const user = interaction.options.getUser('kullanıcı'); // Yasaklanacak kullanıcı
        const reason = interaction.options.getString('sebep') || 'Belirtilmedi'; // Sebep

        const member = await interaction.guild.members.fetch(user.id); // Kullanıcı sunucuda mı kontrol et

        if (member) {
            await member.ban({ reason }); // Kullanıcıyı yasakla
            await interaction.reply(`${user.tag} adlı kullanıcı yasaklandı. Sebep: ${reason}`);
        } else {
            await interaction.reply('Bu kullanıcı sunucuda bulunamadı.');
        }
    },
};
