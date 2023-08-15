interface Character {
  strength: number;
  intelligence: number;
  agility: number;
}

abstract class CharacterClass implements Character {
  constructor(
    public strength: number,
    public intelligence: number,
    public agility: number
  ) {}
}

class Warrior extends CharacterClass {
  weapon: string;

  constructor(
    strength: number,
    intelligence: number,
    agility: number,
    weapon: string
  ) {
    super(strength, intelligence, agility);
    this.weapon = weapon;
  }

  fight() {
    console.log(`The warrior attacks with ${this.weapon}!`);
  }
}

class Mage extends CharacterClass {
  spell: string;

  constructor(
    strength: number,
    intelligence: number,
    agility: number,
    spell: string
  ) {
    super(strength, intelligence, agility);
    this.spell = spell;
  }

  castSpell() {
    console.log(`The mage casts ${this.spell}!`);
  }
}

class Archer extends CharacterClass {
  bow: string;

  constructor(
    strength: number,
    intelligence: number,
    agility: number,
    bow: string
  ) {
    super(strength, intelligence, agility);
    this.bow = bow;
  }

  shootArrow() {
    console.log(`The archer shoots an arrow with ${this.bow}!`);
  }
}
interface CharacterFactory {
  createWarrior(): Character;
  createMage(): Character;
  createArcher(): Character;
}

class WarriorFactory implements CharacterFactory {
  createWarrior(): Character {
    return new Warrior(10, 2, 5, "Knife");
  }
  createMage(): Character {
    return new Mage(2, 10, 5, "Fireball");
  }
  createArcher(): Character {
    return new Archer(5, 2, 10, "Longbow");
  }
}

class MonsterFactory implements CharacterFactory {
  createWarrior() {
    return new Monster(10, 5, 7, "Claws");
  }

  createMage() {
    return new Monster(5, 10, 7, "Spit");
  }

  createArcher() {
    return new Monster(7, 5, 10, "Acid");
  }
}

class Monster extends CharacterClass {
  attack: string;

  constructor(
    strength: number,
    intelligence: number,
    agility: number,
    attack: string
  ) {
    super(strength, intelligence, agility);
    this.attack = attack;
  }

  useAttack() {
    console.log(`The monster attacks with ${this.attack}!`);
  }
}

function createCharacter(factory: CharacterFactory) {
  const warrior = factory.createWarrior();
  const mage = factory.createMage();
  const archer = factory.createArcher();
  console.log(warrior, mage, archer);
}

const warriorFactory = new WarriorFactory();
createCharacter(warriorFactory);

const monsterFactory = new MonsterFactory();
createCharacter(monsterFactory);
