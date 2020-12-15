import LootTable from 'oldschooljs/dist/structures/LootTable';

interface Huntable {
	table: LootTable;
	level: number;
	xp: number;
}

const Huntables: Huntable[] = [];
