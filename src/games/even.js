import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;
const minGenerateNum = 1;
const maxGenerateNum = 100;

const game = () => {
  const question = String(generateNum(minGenerateNum, maxGenerateNum));
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
