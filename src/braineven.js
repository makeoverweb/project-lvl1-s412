import readlineSync from 'readline-sync';

const answerIsEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const checkRandomNum = (randomNum % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const userAsk = readlineSync.question('Your answer: ');
    if (userAsk === checkRandomNum) {
      console.log('Correct!');
    } else if (userAsk === 'yes' && checkRandomNum === 'no') {
      console.log(`${userAsk} is wrong answer ;(. Correct answer was ${checkRandomNum}.`);
      return console.log('Let"s try again, Bill!');
    } else if (userAsk === 'no' && checkRandomNum === 'yes') {
      console.log(`${userAsk} is wrong answer ;(. Correct answer was ${checkRandomNum}.`);
      return console.log('Let"s try again, Bill!');
    } else if (userAsk !== checkRandomNum) {
      console.log(`${userAsk} is wrong answer ;(. Correct answer was ${checkRandomNum}.`);
      console.log('Let"s try again, Bill!');
      return console.log('Let"s try again, Bill!');
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default answerIsEven;
