import { cons } from 'hexlet-pairs';
import engineGame from '../index';


const description = 'What is the result of the expression?\n';

const game = () => {
  const generateNumberOne = Math.floor(Math.random() * 100);
  const generateNumberTwo = Math.floor(Math.random() * 100);
  const generateSign = Math.floor(Math.random() * 3) + 1;

  let question = '';
  let correctAnswer = '';

  switch (generateSign) {
    case 1:
      correctAnswer = generateNumberOne + generateNumberTwo;
      question = `${generateNumberOne} + ${generateNumberTwo}`;
      break;
    case 2:
      correctAnswer = generateNumberOne - generateNumberTwo;
      question = `${generateNumberOne} - ${generateNumberTwo}`;
      break;
    case 3:
      correctAnswer = generateNumberOne * generateNumberTwo;
      question = `${generateNumberOne} * ${generateNumberTwo}`;
      break;
        // no default
  }
  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
