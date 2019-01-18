import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const game = () => {
  const question = generateNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
