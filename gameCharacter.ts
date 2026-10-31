// 1. Copyable interfeysi
interface Copyable<T> {
  clone(): T;
}

class GameCharacter implements Copyable<GameCharacter> {
  constructor(
    private _id: number,
    private _name: string,
    private _level: number,
    private _weapon: string
  ) {}   
  clone(): GameCharacter {
    return new GameCharacter(this._id, this._name, this._level, this._weapon);
  }

  // Getter va setterlar
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get level(): number {
    return this._level;
  }
  set level(value: number) {
    this._level = value;
  }

  get weapon(): string {
    return this._weapon;
  }
  set weapon(value: string) {
    this._weapon = value;
  }

  toString(): string {
    return `GameCharacter{id=${this._id}, name='${this._name}', level=${this._level}, weapon='${this._weapon}'}`;
  }
}

// 3. CharacterFactory klassi
class CharacterFactory {
  private character: GameCharacter; // prototip

  constructor(character: GameCharacter) {
    this.character = character;
  }

  setCharacter(character: GameCharacter): void {
    this.character = character;
  }

  
  cloneCharacter(): GameCharacter {
    return this.character.clone();
  }
}

function main(): void {
  const original = new GameCharacter(1, "Warrior", 10, "Sword");

  const factory = new CharacterFactory(original);


  const clone1 = factory.cloneCharacter();
  const clone2 = factory.cloneCharacter();

  clone1.name = "Archer";
  clone1.level = 15;
  clone1.weapon = "Bow";

  clone2.name = "Mage";
  clone2.level = 20;
  clone2.weapon = "Staff";

  console.log(`Original: ${original}`);
  console.log(`Clone 1 : ${clone1}`);
  console.log(`Clone 2 : ${clone2}`);

  console.log(`\noriginal === clone1: ${original === clone1}`);
  console.log(`original === clone2: ${original === clone2}`);
  console.log(`clone1 === clone2  : ${clone1 === clone2}`);

  const unchanged =
    original.name === "Warrior" &&
    original.level === 10 &&
    original.weapon === "Sword";
  console.log(`Original o'zgarmadimi? ${unchanged}`);
}

main();
