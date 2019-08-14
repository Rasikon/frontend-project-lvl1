import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log("Find the greatest common divisor of given numbers.");
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
    if (number < number2){
        for(let i = number; number > 0; i -= 1){
            if (number % i === 0 && number2 % i === 0){
                nod = i;
                break;
            }
        }
    } else if (number > number2){
        for(let i = number2; number2 > 0; i -= 1){
            if (number2 % i === 0 && number % i === 0){
                nod = i;
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
