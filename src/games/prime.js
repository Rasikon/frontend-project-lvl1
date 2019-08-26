import startGame from '../index';
import generateNumber from '../generateNumber';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculation = (number) => {
  let isPrime = 'no';
  const sqrt = Math.trunc(Math.sqrt(number));
  for (let j = 2; j <= sqrt; j += 1) {
    if (number % j !== 0) {
      isPrime = 'yes';
    } else {
      isPrime = 'no';
      break;
    }
  }
  return isPrime;
};
const createGameplay = () => {
  const number = generateNumber();
  const question = number;
  const answer = calculation(number);
  const dataGame = [question, answer];
  return dataGame;
};


export default () => startGame(gameTask, createGameplay);
