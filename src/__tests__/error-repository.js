import ErrorRepository from '../js/ErrorRepository';

const dataList = [
  [400, 'Bad Request'],
  [404, 'Not Found'],
  [502, 'Bad Gateway'],
  [101, 'Unknown error'],
];

const handler = test.each(dataList);
handler('Testing the translate function', (code, expected) => {
  const errorRepository = new ErrorRepository();
  const result = errorRepository.translate(code);
  expect(result).toBe(expected);
});
