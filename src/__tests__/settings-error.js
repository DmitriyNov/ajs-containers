import Settings from '../js/Settings';

const settings = new Settings();

test('Testing the getter function error', () => {
  const testSet = ['green', 'metal', 'easy'];

  expect(() => {
    settings.setSettings(...testSet);
  }).toThrow('Invalid settings parameters');
});
