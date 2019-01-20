import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What is the result of the expression?';
const minGenerateNumberOne = 2;
const maxGenerateNumberOne = 10;
const mingenerateSign = 1;
const maxgenerateSign = 3;

const game = () => {
  const generateNumberOne = generateNum(minGenerateNumberOne, maxGenerateNumberOne);
  const generateNumberTwo = generateNum(minGenerateNumberOne, maxGenerateNumberOne);
  const generateSign = generateNum(mingenerateSign, maxgenerateSign);

  let question = '';
  let correctAnswer = '';

  switch (generateSign) {
    case 1:
      correctAnswer = String(generateNumberOne + generateNumberTwo);
      question = `${generateNumberOne} + ${generateNumberTwo}`;
      break;
    case 2:
      correctAnswer = String(generateNumberOne - generateNumberTwo);
      question = `${generateNumberOne} - ${generateNumberTwo}`;
      break;
    default:
      correctAnswer = String(generateNumberOne * generateNumberTwo);
      question = `${generateNumberOne} * ${generateNumberTwo}`;
      break;
  }
  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
