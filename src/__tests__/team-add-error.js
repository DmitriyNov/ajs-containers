// Не знаю, нужно ли было отдельный файл для этого делать, наверное лучше в одном всё тестировать
import Team from '../js/Team';

const team = new Team();

test('Testing the add function error', () => {
  const testObj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  };
  team.add(testObj);
  expect(() => {
    team.add(testObj);
  }).toThrow('Этот персонаж уже в команде');
});
