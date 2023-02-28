import Settings from '../js/Settings';

const settings = new Settings();

test('Testing the getter function', () => {
  const testSet = ['dark', 'rock', 'nightmare'];
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'nightmare'],
  ]);
  settings.setSettings(...testSet);
  expect(settings.settings).toEqual(expected);
});
