import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const minGenerateNum = 1;
const maxGenerateNum = 50;

const greatestDivisor = (a, b) => {
  const smallNum = Math.min(a, b);
  let result = 0;
  for (let i = smallNum; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    result = i;
  }
  return result;
};

const game = () => {
  const getNumberOne = generateNum(minGenerateNum, maxGenerateNum);
  const getNumberTwo = generateNum(minGenerateNum, maxGenerateNum);

  const correctAnswer = String(greatestDivisor(getNumberOne, getNumberTwo));
  const question = `${getNumberOne} ${getNumberTwo}`;

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
