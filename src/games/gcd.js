import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const minGenerateNumberOne = 1;
const maxGenerateNumberOne = 50;

const game = () => {
  const generateNumberOne = generateNum(minGenerateNumberOne, maxGenerateNumberOne);
  const generateNumberTwo = generateNum(minGenerateNumberOne, maxGenerateNumberOne);

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
  const correctAnswer = String(greatestDivisor(generateNumberOne, generateNumberTwo));
  const question = `${generateNumberOne} ${generateNumberTwo}`;

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
