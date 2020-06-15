module.exports = {
	name: 'stop',
	description: 'Stop command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Trebva da si u voisu inache nema da stopvam kopele');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Kvo da spiram kato nema nishto we narkoman.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Svurshi kupona za dneska. :(');
	}
};
