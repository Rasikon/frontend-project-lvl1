import playGame from '../index';
import generateNumber from '../generateNumber';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let j = 2; j <= Math.sqrt(number); j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = generateNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  const dataGame = [question, answer];
  return dataGame;
};

export default () => playGame(gameTask, generateRound);
