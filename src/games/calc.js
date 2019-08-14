import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
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
  const str = '+-*';
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * (100 - 1)) + 1;
    const number2 = Math.floor(Math.random() * (100 - 1)) + 1;
    let number3 = 0;
    if (str[i] === '+') {
      number3 = number + number2;
    } else if (str[i] === '-') {
      number3 = number - number2;
    } else if (str[i] === '*') {
      number3 = number * number2;
    }
    console.log(`Question: ${number} ${str[i]} ${number2}`);
    const answer = readlineSync.question('Your answer:');
    counter += 1;
    if (number3 === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${number3}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
};
