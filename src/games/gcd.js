import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
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
  let nod = 0;
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1)) + 1;
    const number2 = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${number} ${number2}`);
    if (number < number2) {
      for (let j = number; number > 0; j -= 1) {
        if (number % j === 0 && number2 % j === 0) {
          nod = j;
          break;
        }
      }
    } else if (number > number2) {
      for (let j = number2; number2 > 0; j -= 1) {
        if (number2 % j === 0 && number % j === 0) {
          nod = j;
          break;
        }
      }
    }
    const answer = readlineSync.question('Your answer:');
    counter += 1;
    if (nod === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${nod}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
};
