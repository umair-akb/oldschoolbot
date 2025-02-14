import { Bank } from 'oldschooljs';
import { convertLVLtoXP } from 'oldschooljs/dist/util';

import { GearSetup } from '../src/lib/gear/types';
import getUserBestGearFromBank from '../src/lib/minions/functions/getUserBestGearFromBank';
import { Gear } from '../src/lib/structures/Gear';
import { Skills } from '../src/lib/types';
import itemID from '../src/lib/util/itemID';

const userBank = new Bank({
	'Bandos chestplate': 4,
	'Bandos tassets': 1,
	'Helm of neitiznot': 2,
	'Justiciar faceguard': 1,
	'Dragon scimitar': 1,
	'3rd age amulet': 1,
	'Occult necklace': 1,
	'Ancestral robe top': 1,
	'Ancestral robe bottom': 1,
	'Dragonfire shield': 1,
	'Amulet of glory': 1
});
const nullGear: GearSetup = {
	'2h': null,
	ammo: null,
	body: null,
	cape: null,
	feet: null,
	hands: null,
	head: null,
	legs: null,
	neck: null,
	ring: null,
	shield: null,
	weapon: null
};
const userGear = new Gear({
	...nullGear,
	'2h': { item: itemID('Elder maul'), quantity: 1 },
	body: { item: itemID('Dragon chainbody'), quantity: 1 },
	cape: { item: itemID('Cape of legends'), quantity: 1 },
	hands: { item: itemID('Leather gloves'), quantity: 1 },
	neck: { item: itemID('Amulet of strength'), quantity: 1 }
});

const maxCombat: Skills = {
	attack: convertLVLtoXP(99),
	strength: convertLVLtoXP(99),
	defence: convertLVLtoXP(99),
	ranged: convertLVLtoXP(99),
	magic: convertLVLtoXP(99),
	prayer: convertLVLtoXP(99)
};

describe('getUserBestGearFromBank', () => {
	test('autoequip melee attack slash', async () => {
		expect(getUserBestGearFromBank(userBank.bank, userGear, 'melee', maxCombat, 'attack', 'slash')).toStrictEqual({
			gearToEquip: {
				...nullGear,
				body: { item: itemID('Bandos chestplate'), quantity: 1 },
				cape: { item: itemID('Cape of legends'), quantity: 1 },
				hands: { item: itemID('Leather gloves'), quantity: 1 },
				neck: { item: itemID('Amulet of glory'), quantity: 1 },
				head: { item: itemID('Justiciar faceguard'), quantity: 1 },
				legs: { item: itemID('Bandos tassets'), quantity: 1 },
				weapon: { item: itemID('Dragon scimitar'), quantity: 1 },
				shield: { item: itemID('Dragonfire shield'), quantity: 1 }
			},
			toRemoveFromGear: new Bank({
				'Elder maul': 1,
				'Dragon chainbody': 1,
				'Amulet of strength': 1
			}).bank,
			toRemoveFromBank: new Bank({
				'Dragon scimitar': 1,
				'Bandos tassets': 1,
				'Bandos chestplate': 1,
				'Justiciar faceguard': 1,
				'Amulet of glory': 1,
				'Dragonfire shield': 1
			}).bank,
			userFinalBank: new Bank({
				'Bandos chestplate': 3,
				'Dragon chainbody': 1,
				'Helm of neitiznot': 2,
				'Elder maul': 1,
				'3rd age amulet': 1,
				'Occult necklace': 1,
				'Ancestral robe top': 1,
				'Ancestral robe bottom': 1,
				'Amulet of strength': 1
			}).bank
		});
	});
	test('autoequip melee attack crush', async () => {
		expect(getUserBestGearFromBank(userBank.bank, userGear, 'melee', maxCombat, 'attack', 'crush')).toStrictEqual({
			gearToEquip: {
				...nullGear,
				body: { item: itemID('Bandos chestplate'), quantity: 1 },
				cape: { item: itemID('Cape of legends'), quantity: 1 },
				hands: { item: itemID('Leather gloves'), quantity: 1 },
				neck: { item: itemID('Amulet of glory'), quantity: 1 },
				head: { item: itemID('Justiciar faceguard'), quantity: 1 },
				legs: { item: itemID('Bandos tassets'), quantity: 1 },
				'2h': { item: itemID('Elder maul'), quantity: 1 }
			},
			toRemoveFromGear: new Bank({
				'Dragon chainbody': 1,
				'Amulet of strength': 1
			}).bank,
			toRemoveFromBank: new Bank({
				'Bandos chestplate': 1,
				'Bandos tassets': 1,
				'Justiciar faceguard': 1,
				'Amulet of glory': 1
			}).bank,
			userFinalBank: new Bank({
				'Bandos chestplate': 3,
				'Helm of neitiznot': 2,
				'Dragon scimitar': 1,
				'Dragon chainbody': 1,
				'3rd age amulet': 1,
				'Occult necklace': 1,
				'Ancestral robe top': 1,
				'Ancestral robe bottom': 1,
				'Dragonfire shield': 1,
				'Amulet of strength': 1
			}).bank
		});
	});
	test('autoequip mage attack magic strength', async () => {
		expect(
			getUserBestGearFromBank(userBank.bank, userGear, 'mage', maxCombat, 'attack', 'magic', 'strength')
		).toStrictEqual({
			gearToEquip: {
				...nullGear,
				cape: { item: itemID('Cape of legends'), quantity: 1 },
				hands: { item: itemID('Leather gloves'), quantity: 1 },
				neck: { item: itemID('Occult necklace'), quantity: 1 },
				head: { item: itemID('Helm of neitiznot'), quantity: 1 },
				legs: { item: itemID('Ancestral robe bottom'), quantity: 1 },
				body: { item: itemID('Ancestral robe top'), quantity: 1 }
			},
			toRemoveFromGear: new Bank({
				'Dragon chainbody': 1,
				'Amulet of strength': 1,
				'Elder maul': 1
			}).bank,
			toRemoveFromBank: new Bank({
				'Helm of neitiznot': 1,
				'Ancestral robe top': 1,
				'Ancestral robe bottom': 1,
				'Occult necklace': 1
			}).bank,
			userFinalBank: new Bank({
				'Bandos chestplate': 4,
				'Bandos tassets': 1,
				'Helm of neitiznot': 1,
				'Justiciar faceguard': 1,
				'Dragon scimitar': 1,
				'3rd age amulet': 1,
				'Dragon chainbody': 1,
				'Amulet of strength': 1,
				'Elder maul': 1,
				'Dragonfire shield': 1,
				'Amulet of glory': 1
			}).bank
		});
	});
	test('autoequip mage attack magic', async () => {
		expect(getUserBestGearFromBank(userBank.bank, userGear, 'mage', maxCombat, 'attack', 'magic')).toStrictEqual({
			gearToEquip: {
				...nullGear,
				cape: { item: itemID('Cape of legends'), quantity: 1 },
				hands: { item: itemID('Leather gloves'), quantity: 1 },
				neck: { item: itemID('3rd age amulet'), quantity: 1 },
				head: { item: itemID('Helm of neitiznot'), quantity: 1 },
				legs: { item: itemID('Ancestral robe bottom'), quantity: 1 },
				body: { item: itemID('Ancestral robe top'), quantity: 1 }
			},
			toRemoveFromGear: new Bank({
				'Dragon chainbody': 1,
				'Amulet of strength': 1,
				'Elder maul': 1
			}).bank,
			toRemoveFromBank: new Bank({
				'Helm of neitiznot': 1,
				'Ancestral robe top': 1,
				'Ancestral robe bottom': 1,
				'3rd age amulet': 1
			}).bank,
			userFinalBank: new Bank({
				'Bandos chestplate': 4,
				'Bandos tassets': 1,
				'Helm of neitiznot': 1,
				'Justiciar faceguard': 1,
				'Dragon scimitar': 1,
				'Occult necklace': 1,
				'Dragon chainbody': 1,
				'Amulet of strength': 1,
				'Elder maul': 1,
				'Dragonfire shield': 1,
				'Amulet of glory': 1
			}).bank
		});
	});
	test('autoequip melee defence slash', async () => {
		expect(getUserBestGearFromBank(userBank.bank, userGear, 'melee', maxCombat, 'defence', 'slash')).toStrictEqual({
			gearToEquip: {
				...nullGear,
				body: { item: itemID('Bandos chestplate'), quantity: 1 },
				cape: { item: itemID('Cape of legends'), quantity: 1 },
				hands: { item: itemID('Leather gloves'), quantity: 1 },
				neck: { item: itemID('Amulet of glory'), quantity: 1 },
				head: { item: itemID('Justiciar faceguard'), quantity: 1 },
				legs: { item: itemID('Bandos tassets'), quantity: 1 },
				weapon: { item: itemID('Dragon scimitar'), quantity: 1 },
				shield: { item: itemID('Dragonfire shield'), quantity: 1 }
			},
			toRemoveFromGear: new Bank({
				'Dragon chainbody': 1,
				'Amulet of strength': 1,
				'Elder maul': 1
			}).bank,
			toRemoveFromBank: new Bank({
				'Bandos chestplate': 1,
				'Bandos tassets': 1,
				'Justiciar faceguard': 1,
				'Amulet of glory': 1,
				'Dragonfire shield': 1,
				'Dragon scimitar': 1
			}).bank,
			userFinalBank: new Bank({
				'Bandos chestplate': 3,
				'Dragon chainbody': 1,
				'Helm of neitiznot': 2,
				'3rd age amulet': 1,
				'Occult necklace': 1,
				'Ancestral robe top': 1,
				'Ancestral robe bottom': 1,
				'Elder maul': 1,
				'Amulet of strength': 1
			}).bank
		});
	});
	test('insufficient stats', async () => {
		expect(
			getUserBestGearFromBank(
				userBank.bank,
				userGear,
				'melee',
				{ defence: convertLVLtoXP(99) },
				'defence',
				'slash'
			)
		).toStrictEqual({
			gearToEquip: {
				...nullGear,
				body: { item: itemID('Bandos chestplate'), quantity: 1 },
				cape: { item: itemID('Cape of legends'), quantity: 1 },
				hands: { item: itemID('Leather gloves'), quantity: 1 },
				neck: { item: itemID('Amulet of glory'), quantity: 1 },
				head: { item: itemID('Justiciar faceguard'), quantity: 1 },
				legs: { item: itemID('Bandos tassets'), quantity: 1 },
				weapon: null,
				shield: { item: itemID('Dragonfire shield'), quantity: 1 }
			},
			toRemoveFromGear: new Bank({
				'Dragon chainbody': 1,
				'Amulet of strength': 1,
				'Elder maul': 1
			}).bank,
			toRemoveFromBank: new Bank({
				'Bandos chestplate': 1,
				'Bandos tassets': 1,
				'Justiciar faceguard': 1,
				'Amulet of glory': 1,
				'Dragonfire shield': 1
			}).bank,
			userFinalBank: new Bank({
				'Bandos chestplate': 3,
				'Dragon chainbody': 1,
				'Helm of neitiznot': 2,
				'3rd age amulet': 1,
				'Occult necklace': 1,
				'Ancestral robe top': 1,
				'Ancestral robe bottom': 1,
				'Elder maul': 1,
				'Amulet of strength': 1,
				'Dragon scimitar': 1
			}).bank
		});
	});
});
