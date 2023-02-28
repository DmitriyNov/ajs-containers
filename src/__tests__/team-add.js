import Team from '../js/Team';

const team = new Team();

test('Testing the add function', () => {
  const testObj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  };
  const expected = new Set([{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }]);
  team.add(testObj);
  expect(team.characters).toEqual(expected);
});
