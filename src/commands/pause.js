module.exports = {
	name: 'pause',
	description: 'Pause command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('Na pauza sme. veche moje da hodish da seresh');
		}
		return message.channel.send('Kvo pauzirash kat nema muzika we aver?');
	}
};
