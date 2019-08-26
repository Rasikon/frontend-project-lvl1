import startGame from '../index';
import generateNumber from '../generateNumber';

const gameTask = 'Find the greatest common divisor of given numbers.';

const calculation = (number1, number2) => {
  if (number2 > 0) {
    const number3 = number1 % number2;
    return calculation(number2, number3);
  }
  return Math.abs(number1);
};

const createGameplay = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const question = `${number1} ${number2}`;
  const answer = String(calculation(number1, number2));
  const dataGame = [question, answer];
  return dataGame;
};

export default () => startGame(gameTask, createGameplay);
