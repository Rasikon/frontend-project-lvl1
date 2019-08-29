import playGame from '../index';
import generateNumber from '../generateNumber';

const gameTask = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (firstElement, difference, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = firstElement + difference * i;
  }
  return progression;
};

const generateRound = () => {
  const firstElement = generateNumber();
  const difference = generateNumber();
  const missElement = generateNumber(0, 10);
  const progression = generateProgression(firstElement, difference, progressionLength);
  const answer = `${progression.splice(missElement, 1, '..')}`;
  const question = progression.join(' ');
  const dataGame = [question, answer];
  return dataGame;
};

export default () => playGame(gameTask, generateRound);
