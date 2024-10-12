const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yaz') // Komut adı
        .setDescription('Girdiğiniz mesajı düz metin olarak atar.')
        .addStringOption(option => 
            option.setName('mesaj') // Parametre adı
                .setDescription('Gönderilecek mesaj')
                .setRequired(true)), // Mesajın zorunlu olmasını sağlıyoruz
    async execute(interaction) {
        const mesaj = interaction.options.getString('mesaj'); // Kullanıcının yazdığı mesajı alıyoruz

        // Düz metin mesajını gönderiyoruz
        await interaction.reply(mesaj); // Kullanıcının mesajını doğrudan yanıt olarak gönder
    },
};
