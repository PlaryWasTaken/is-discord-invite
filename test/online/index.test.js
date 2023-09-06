const isDiscordInviteLink = require('../../index.js');

describe('#isDiscordInviteLink.regex', () => {
	// https://discord.gg
	describe('https://discord.gg', () => {
		test('Valid Discord.gg link 1', () => {
			const url = 'https://discord.gg/b8nzKetf';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});

		test('Valid Discord.gg link 2', () => {
			const url = 'https://DISCORD.gg/4EBN3vJ';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});

		test('Valid Discord.gg link 3', () => {
			const url = 'foo example 123123 https://discord.gg/WNdbZDJm computer cat UwU :DDDDDD';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});

		test('Valid link with options', () => {
			const url = 'https://discord.gg/d9XxuDc';
			expect(isDiscordInviteLink.regex(url, { defaultDiscordUrls: true })).toBe(true);
		});
	});

	// https://discord.com/invite
	describe('https://discord.com/invite', () => {
		test('Valid Discord.com/invite link 1', () => {
			const url = 'https://discord.com/invite/b8nzKetf';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});

		test('Valid Discord.gg/invite link 2', () => {
			const url = 'https://discord.gg/invite/t6uYRKR';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});

		test('Valid Discord.gg/invite link 3', () => {
			const url = 'ABCDE123>&^*%mn$v%&$^n#^$%#hb$%^h#b<https://discord.gg/invite/t6uYRKR?qwpe{r:lqfeQWECFRQ';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});
	});


	// otherDiscordUrls
	describe('otherDiscordUrls', () => {
		test('Valid other Discord domain - watchanimeattheoffice.com', () => {
			const url = 'https://watchanimeattheoffice.com/invite/VFbpeG48c';
			expect(isDiscordInviteLink.regex(url, { otherDiscordUrls: true })).toBe(true);
		});

		test('Valid other Discord domain - discordsays.com', () => {
			const url = 'https://discordsays.com/invite/TvaKnzsxC6';
			expect(isDiscordInviteLink.regex(url, { otherDiscordUrls: true })).toBe(true);
		});
	});


	// disboard
	describe('https://disboard.org', () => {
		test('Valid Disboard.org link', () => {
			const url = 'https://disboard.org/en/server/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url, { disboard: true })).toBe(true);
		});
	});

	// discordMe
	describe('https://discord.me', () => {
		test('Valid Discord.me link', () => {
			const url = 'https://discord.me/server/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});

		test('Valid link with everything option', () => {
			const url = 'https://discord.me/server/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url, { everything: true })).toBe(true);
		});
	});

	// discordhome
	describe('https://discordhome.com', () => {
		test('Valid discordhome.me link', () => {
			const url = 'https://discordhome.com/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url)).toBe(true);
		});
	});
});


describe('#isNotValidDiscordInviteLink', () => {
// https://discord.gg
	describe('https://discord.gg', () => {
		test('Not valid Discord.gg link 1', () => {
			const url = 'catttt ^-^';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});

		test('Not valid Discord.gg link 2', () => {
			const url = '4EBN3vJ://discord.gg';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});

		test('Not valid Discord.gg link 3', () => {
			const url = 'foo example 123123 https://discordgg/WNdbZDJm computer cat UwU :DDDDDD';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});

		test('Not valid link with options', () => {
			const url = 'discord://.gg/d9XxuDc';
			expect(isDiscordInviteLink.regex(url, { defaultDiscordUrls: true })).toBe(false);
		});
	});

	// https://discord.com/invite
	describe('https://discord.com/invite', () => {
		test('Not valid Discord.com/invite link 1', () => {
			const url = 'https://dsIcord.com/invite/b8nzKetf';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});

		test('Not valid Discord.gg/invite link 2', () => {
			const url = 'https://discórd.gg/invite/t6uYRKR';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});

		test('Not valid Discord.gg/invite link 3', () => {
			const url = 'ABCDE123>&^*%mn$v%&$^n#^$%#hb$%^h#b</invite/t6uYRKR?qwpe{r:lqfeQWECFRQ';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});
	});


	// otherDiscordUrls
	describe('otherDiscordUrls', () => {
		test('Not valid other Discord domain - watchanimeattheoffice.com', () => {
			const url = 'https://watchanime.com/invite/VFbpeG48c';
			expect(isDiscordInviteLink.regex(url, { otherDiscordUrls: true })).toBe(false);
		});

		test('Not valid other Discord domain - discordsays.com', () => {
			const url = 'https://discord.says/invite/TvaKnzsxC6';
			expect(isDiscordInviteLink.regex(url, { otherDiscordUrls: true })).toBe(false);
		});
	});


	// disboard
	describe('https://disboard.org', () => {
		test('Not valid Disboard.org link', () => {
			const url = 'https://org.disboard/en/server/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url, { disboard: true })).toBe(false);
		});
	});

	// discordMe
	describe('https://discord.me', () => {
		test('Not valid Discord.me link', () => {
			const url = 'https://discord.me/srerver/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});

		test('Not valid link with everything option', () => {
			const url = 'https://discordme/server/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url, { everything: true })).toBe(false);
		});
	});

	// discordhome
	describe('https://discordhome.com', () => {
		test('Not valid discordhome.me link', () => {
			const url = 'https://dIscord;ome.com/join/1149087970587062392';
			expect(isDiscordInviteLink.regex(url)).toBe(false);
		});
	});
});