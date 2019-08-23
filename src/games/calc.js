import { welcome, contextGames } from '..';

const headQuestion = 'What is the result of the expression?';
const str = '+-*';
const generateNumber = () => Math.floor(Math.random() * (100 - 1)) + 1;
const generateOperator = (string) => string[Math.floor(Math.random() * (3 - 0)) + 0];

const calculation = (number1, number2, operator) => {
  if (operator === '+') {
    return number1 + number2;
  } if (operator === '-') {
    return number1 - number2;
  } if (operator === '*') {
    return number1 * number2;
  }
  return null;
};

const answerTask = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const operator = generateOperator(str);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculation(number1, number2, operator));
  const array = [question, answer];
  return array;
};
export default () => {
  welcome(headQuestion);
  contextGames(answerTask);
};
