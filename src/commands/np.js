module.exports = {
	name: 'np',
	description: 'Now playing command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nema muzika v momenta we.');
		return message.channel.send(`V momenta kuchecite sa: **${serverQueue.songs[0].title}**`);
	}
};
