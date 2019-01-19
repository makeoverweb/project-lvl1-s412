import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const game = () => {
  const primeNum = generateNum(2, 500);

  const simpleNum = (num) => {
    let iter = 2;
    while (iter < num) {
      if (num % iter === 0) {
        return 'no';
      }
      iter += 1;
    }
    return 'yes';
  };

  const question = `${primeNum}`;
  const correctAnswer = String(simpleNum(primeNum));

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
