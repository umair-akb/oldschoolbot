import LootTable from 'oldschooljs/dist/structures/LootTable';

interface Huntable {
	table: LootTable;
	level: number;
	xp: number;
	name: string;
}

const Huntables: Huntable[] = [
	{
		name: 'Polar kebbit',
		xp: 30,
		level: 1,
		table: new LootTable().every('Bones').every('Polar kebbit fur').every('Raw beast meat')
	},
	{
		name: 'Feldip weasel',
		xp: 48,
		level: 7,
		table: new LootTable().every('Bones').every('Feldip weasel fur').every('Raw beast meat')
	},
	{
		name: 'Copper longtail',
		xp: 61.2,
		level: 9,
		table: new LootTable()
			.every('Bones')
			.every('Raw bird meat')
			.every('Orange feather', [5, 10])
	},
	{
		name: 'Ruby harvest',
		xp: 24,
		level: 15,
		table: new LootTable().every('Ruby harvest')
	},
	{
		name: 'Swamp lizard',
		xp: 152,
		level: 29,
		table: new LootTable().every('Swamp lizard')
	},
	{
		name: 'Spotted kebbit',
		xp: 104,
		level: 43,
		table: new LootTable().every('Bones').every('Spotted kebbit fur')
	},
	{
		name: 'Chinchompa',
		xp: 198.4,
		level: 53,
		table: new LootTable().every('Chinchompa')
	},
	{
		name: 'Red chinchompa',
		xp: 265,
		level: 63,
		table: new LootTable().every('Red chinchompa')
	},
	{
		name: 'Dark kebbit',
		xp: 132,
		level: 57,
		table: new LootTable().every('Bones').every('Dark kebbit fur')
	},
	{
		name: 'Red salamander',
		xp: 272,
		level: 59,
		table: new LootTable().every('Red salamander')
	},
	{
		name: 'Black salamander',
		xp: 319.2,
		level: 67,
		table: new LootTable().every('Black salamander')
	},
	{
		name: 'Black chinchompa',
		xp: 315,
		level: 73,
		table: new LootTable().every('Black chinchompa')
	},
	{
		name: 'Herbiboar',
		xp: 0,
		level: 80,
		table: new LootTable().every('Ranarr weed')
	}
];
