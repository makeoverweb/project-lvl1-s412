import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const game = () => {
  const generateNumberOne = generateNum(1, 50);
  const generateNumberTwo = generateNum(1, 50);
  const greatestDivisor = (a, b) => {
    const smallNum = (a < b) ? a : b;
    let result = 0;
    for (let i = smallNum; i > 0; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        return i;
      }
      result = i;
    }
    return result;
  };
  const correctAnswer = greatestDivisor(generateNumberOne, generateNumberTwo);
  const question = `${generateNumberOne} ${generateNumberTwo}`;

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
