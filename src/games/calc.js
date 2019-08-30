import playGame from '..';
import generateNumber from '../generateNumber';

const gameTask = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

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

const generateRound = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const operator = operators[generateNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculation(number1, number2, operator));
  const dataGame = [question, answer];
  return dataGame;
};

export default () => playGame(gameTask, generateRound);
