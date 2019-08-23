import { welcome, contextGames } from '..';

const headQuestion = 'What number is missing in the progression?';
const string = '5 7 9 11 13 15 17 19 21 23';
const generateNumber = () => Math.floor(Math.random() * (10 - 0)) + 0;

const generateString = (str) => {
  const index = generateNumber();
  const newString = str.split(' ');
  const keyNumber = newString[index];
  newString[index] = '..';
  newString.join(' ');
  const array = [newString, keyNumber];
  return array;
};


const answerTask = () => {
  const arrayString = generateString(string);
  const question = `${arrayString[0].join(' ')}`;
  const answer = arrayString[1];
  const array = [question, answer];
  return array;
};

export default () => {
  welcome(headQuestion);
  contextGames(answerTask);
};
