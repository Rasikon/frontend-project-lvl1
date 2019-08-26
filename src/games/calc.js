import startGame from '../index';
import generateNumber from '../generateNumber';

const gameTask = 'What is the result of the expression?';
const str = '+-*';
const generateOperator = (string) => string[Math.floor(Math.random() * (str.length - 0)) + 0];

const calculation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const createGameplay = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const operator = generateOperator(str);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculation(number1, number2, operator));
  const dataGame = [question, answer];
  return dataGame;
};
export default () => startGame(gameTask, createGameplay);
