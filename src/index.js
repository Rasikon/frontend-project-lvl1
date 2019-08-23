import readlineSync from 'readline-sync';

const numRound = 3;
let name = '';
let counter = 0;

const welcome = (headQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${headQuestion}\n`);
  name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!\n`);
};

const contextGames = (answerTask) => {
  for (let i = 0; i < numRound; i += 1) {
    const arr = answerTask();
    console.log(`Question: ${arr[0]}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === arr[1]) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${arr[1]}`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export { welcome, contextGames };
