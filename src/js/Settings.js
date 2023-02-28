export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.theme = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];
  }

  // Лучше наверное set для каждой настройки отдельный делать, но мне лень)
  setSettings(theme = 'dark', music = 'trance', difficulty = 'easy') {
    if (this.theme.includes(theme) && this.music.includes(music) && this.difficulty.includes(difficulty)) {
      this.default.set('theme', theme);
      this.default.set('music', music);
      this.default.set('difficulty', difficulty);
    } else {
      throw new Error('Invalid settings parameters');
    }
  }

  get settings() {
    return this.default;
  }
}
// Не уверен, что правильно понял, что нужно сделать, вроде всё работает по ТЗ)
