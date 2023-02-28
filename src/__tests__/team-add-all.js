import Team from '../js/Team';

const team = new Team();

test('Testing the add function', () => {
  const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const swordman = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const magician = {
    name: 'Волшебник',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const expected = new Set([
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Мечник',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Волшебник',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ]);
  team.addAll(bowman, swordman, magician, swordman);
  expect(team.characters).toEqual(expected);
});
