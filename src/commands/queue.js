module.exports = {
	name: 'queue',
	description: 'Queue command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Oshte nema muzika. Kuv e toq kupon we?');
		return message.channel.send(`
__**Pleilista za dneska:**__

${serverQueue.songs.map((song) => `**-** ${song.title}`).join('\n')}

**Sega vurvi:** ${serverQueue.songs[0].title}
		`);
	}
};
