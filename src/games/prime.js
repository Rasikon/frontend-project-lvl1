import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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
    const number = Math.floor(Math.random() * (500 - 1)) + 1;
    const sqrt = Math.trunc(Math.sqrt(number));
    let isPrime = 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    for (let j = 2; j <= sqrt; j += 1) {
      if (number % j !== 0) {
        isPrime = 'yes';
      } else {
        isPrime = 'no';
        break;
      }
    }
    if (isPrime === answer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isPrime}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
};
