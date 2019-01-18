import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countRounds = 3;

const engineGame = (description, game) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < countRounds; i += 1) {
    const dataGame = game();
    const question = car(dataGame);
    const answer = readlineSync.question(`Question: ${question} `);
    const correctAnswer = String(cdr(dataGame));
    console.log(`Your answer: ${answer}`);

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log('Let"s try again, Bill!');
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};


export default engineGame;
