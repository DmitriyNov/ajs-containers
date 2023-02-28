export default class ErrorRepository {
  constructor() {
    // В описании задания не указано, как должно формироваться хранилище.
    // По логике уже должна быть база ошибок
    this.errors = new Map([
      [400, 'Bad Request'],
      [404, 'Not Found'],
      [502, 'Bad Gateway'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    } else {
      return 'Unknown error';
    }
  }
}
