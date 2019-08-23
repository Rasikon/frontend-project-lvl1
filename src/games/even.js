import { welcome, contextGames } from '..';

const headQuestion = "Answer 'yes' if number even otherwise answer 'no'.";
const generateNumber = () => Math.floor(Math.random() * (100 - 1)) + 1;

const calculation = (number) => ((number % 2 === 0) ? 'yes' : 'no');

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
