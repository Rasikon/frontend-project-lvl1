import startGame from '../index';
import generateNumber from '../generateNumber';

const gameTask = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (firstElement, difference) => {
  const progression = [];
  progression[0] = firstElement;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + difference;
  }
  return progression;
};


const createGameplay = () => {
  const firstElement = generateNumber();
  const difference = generateNumber();
  const missElement = generateNumber(0, 10);
  const progression = generateProgression(firstElement, difference);
  const answer = `${progression.splice(missElement, 1, '..')}`;
  const question = progression.join(' ');
  const dataGame = [question, answer];
  return dataGame;
};

export default () => startGame(gameTask, createGameplay);
