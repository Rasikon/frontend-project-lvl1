import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
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
  const string = '5 7 9 11 13 15 17 19 21 23';
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const index = Math.floor(Math.random() * (10 - 0)) + 0;
    const newString = string.split(' ');
    const keyNumber = newString[index];
    newString[index] = '..';
    console.log(newString.join(' '));
    const answer = readlineSync.question('Your answer:');
    counter += 1;
    if (Number(keyNumber) === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${keyNumber}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
};
