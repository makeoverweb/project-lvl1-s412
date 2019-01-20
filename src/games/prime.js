import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minGenerateNum = 2;
const maxGenerateNum = 500;

const isPrime = (num) => {
  if (num < minGenerateNum) {
    return false;
  }
  for (let iter = 2; iter < Math.sqrt(num); iter += 1) {
    if (num % iter === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const anyNum = generateNum(minGenerateNum, maxGenerateNum);

  const question = `${anyNum}`;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
