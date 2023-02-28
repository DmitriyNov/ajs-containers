export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    if (this.characters.has(character)) {
      throw new Error('Этот персонаж уже в команде');
    } else {
      this.characters.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.characters.add(character));
  }

  toArray() {
    return Array.from(this.characters);
  }
}
