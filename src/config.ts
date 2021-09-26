import { KlasaClientOptions } from 'klasa';

import { IDiscordSettings, PatreonConfig, ProviderConfig, RedditAppConfig, TwitterAppConfig } from './lib/types';

export const botToken = '${{ secrets.SECRET_TOKEN }}';
export const providerConfig: ProviderConfig | null = {
	default: 'postgres123',
	postgres: {
		database: 'postgres123',
		user: 'postgres123',
		password: 'postgres123',
		port: 54322
	}
};
export const production = true;

export const redditAppConfig: RedditAppConfig = null;
export const twitterAppConfig: TwitterAppConfig = null;
export const patreonConfig: PatreonConfig = null;
export const customClientOptions: Partial<KlasaClientOptions> = {
	prefix: '-',
	// Your account unique ID
	owners: ['568360658156912640']
};
export const SENTRY_DSN: string | null = null;
export const HTTP_PORT = 880;
export const CLIENT_SECRET = '';
export const CLIENT_ID = '';
export const GITHUB_TOKEN = '';
export const DISCORD_SETTINGS: Partial<IDiscordSettings> = {
	// Your bot unique ID goes here
	BotID: '890811989650186270'
};
