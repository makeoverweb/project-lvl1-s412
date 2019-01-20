import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let iter = 2;
  while (iter < num) {
    if (num <= 1) {
      return false;
    } if (num % iter === 0) {
      return false;
    }
    iter += 1;
  }
  return true;
};

const game = () => {
  const anyNum = generateNum(2, 500);

  const question = `${anyNum}`;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
