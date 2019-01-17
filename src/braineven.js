import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const countRounds = 3;

const answerIsEven = () => {
  const greetingUser = '\nWelcome to the Brain Games!';
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  console.log(greetingUser);
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < countRounds; i += 1) {
    const questionGame = Math.floor(Math.random() * 100);

    const checkQuestionGame = isEven(questionGame) ? 'yes' : 'no';
    console.log(`Question: ${questionGame}`);

    const userAsk = readlineSync.question('Your answer: ');

    if (userAsk !== checkQuestionGame) {
      console.log(`${userAsk} is wrong answer ;(. Correct answer was ${checkQuestionGame}.`);
      console.log('Let"s try again, Bill!');
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default answerIsEven;
