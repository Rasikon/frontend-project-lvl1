import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (gameTask, generateRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTask}\n`);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
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

export default playGame;
