import playGame from '../index';
import generateNumber from '../generateNumber';

const gameTask = "Answer 'yes' if number even otherwise answer 'no'.";

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateNumber(0, 500);
  const answer = isEven(question) ? 'yes' : 'no';
  const dataGame = [question, answer];
  return dataGame;
};

export default () => playGame(gameTask, generateRound);
