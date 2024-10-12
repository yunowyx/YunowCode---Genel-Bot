const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true, // Bu event sadece bir kez çalıştırılacak
  execute(client) {
    console.log(`Bot hazır! Giriş yapıldı: ${client.user.tag}`);

    // Botun durum mesajını ayarla
    client.user.setActivity('Sunucuyu İle', { ActivityType:'PLAYING' });

    // Sunucu sayısını loglara yazdır
    console.log(`Şu an ${client.guilds.cache.size} sunucuda aktif.`);
  },
};