module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Trqbva da si vuv voisa za da skipvash pesni we trol.');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('To nema muzika we pedal.');
		serverQueue.connection.dispatcher.end('Are skipnah q, bez tova ne struvashe.');
	}
};
