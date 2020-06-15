module.exports = {
	name: 'volume',
	description: 'Volume command.',
	cooldown: 5,
	execute(message, args) {
		const { channel } = message.member.voice;
		if (!channel)
			return message.channel.send(
				'Bace qla u voisa predi da uvelichavsh zvuka. Nema da mi se pravish na selski tarikat!'
			);
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('To nema pesni be chovek.');
		if (!args[0]) return message.channel.send(`V momenta voluma e: **${serverQueue.volume}**`);
		serverQueue.volume = args[0]; // eslint-disable-line
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(`Ok! Voluma veche e: **${args[0]}**`);
	}
};
