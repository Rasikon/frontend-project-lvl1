import { welcome, contextGames } from '..';

const headQuestion = 'Find the greatest common divisor of given numbers.';
const generateNumber = () => Math.floor(Math.random() * (100 - 1)) + 1;

const calculation = (number1, number2) => {
  let nod = 0;
  if (number1 < number2) {
    for (let j = number1; number1 > 0; j -= 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        nod = j;
        break;
      }
    }
  } else if (number1 > number2) {
    for (let j = number2; number2 > 0; j -= 1) {
      if (number2 % j === 0 && number1 % j === 0) {
        nod = j;
        break;
      }
    }
  }
  return nod;
};
const answerTask = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const question = `${number1} ${number2}`;
  const answer = String(calculation(number1, number2));
  const array = [question, answer];
  return array;
};

export default () => {
  welcome(headQuestion);
  contextGames(answerTask);
};
