import readlineSync from 'readline-sync';

const roundCount = 3;

const startGame = (gameTask, createGameplay) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTask}\n`);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = createGameplay();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer:');
    if (answerUser === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
