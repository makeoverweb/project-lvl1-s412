import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What is the result of the expression?';
const minGenerateNum = 1;
const maxGenerateNum = 10;
const minGenerateSign = 1;
const maxGenerateSign = 3;

const game = () => {
  const generateNumberOne = generateNum(minGenerateNum, maxGenerateNum);
  const generateNumberTwo = generateNum(minGenerateNum, maxGenerateNum);
  const generateSign = generateNum(minGenerateSign, maxGenerateSign);

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
    default:
      correctAnswer = generateNumberOne * generateNumberTwo;
      question = `${generateNumberOne} * ${generateNumberTwo}`;
      break;
  }
  return cons(question, String(correctAnswer));
};

export default () => engineGame(description, game);
