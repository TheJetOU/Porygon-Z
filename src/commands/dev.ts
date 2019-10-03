/**
 * dev.ts
 * Basic development related commands, may rename later.
 */
import Discord = require('discord.js');
import { BaseCommand } from '../command_base';

export const aliases: aliases = {
	eval: ['js'],
};

export class Ping extends BaseCommand {
	constructor(message: Discord.Message) {
		super('ping', message);
	}

	execute() {
		this.reply(`Pong!`);
	}
}

export class Eval extends BaseCommand {
	constructor(message: Discord.Message) {
		super('eval', message);
	}

	execute() {
		// TODO proper permissions system
		if (this.author.id !== "236292964052107264") return this.reply(`\u274C You do not have permission to do that.`);
		let result: any = '';
		try {
			result = eval(this.target);
		} catch (e) {
			result = `An error occured: ${e.toString()}`;
		}
		this.sendCode(result);
	}
}
