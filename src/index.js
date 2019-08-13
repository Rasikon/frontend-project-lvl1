import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  console.log('');
};
export const greeting = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('');
  return name;
};
export const question = () => {
  const name = greeting();
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      counter += 1;
    } else if (answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
      return;
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
      return;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
};
