import { welcome, contextGames } from '..';

const headQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateNumber = () => Math.floor(Math.random() * (500 - 1)) + 1;

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
const answerTask = () => {
  const number = generateNumber();
  const question = `${number}`;
  const answer = calculation(number);
  const array = [question, answer];
  return array;
};


export default () => {
  welcome(headQuestion);
  contextGames(answerTask);
};
