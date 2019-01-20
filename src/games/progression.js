import { cons, car, cdr } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';

const numberOfSteps = (start, step, hidden) => {
  const colon = ':';
  const miss = ' ';
  const roundsLength = 10;
  let result = ' ';
  const colonPosition = start + step * hidden;

  for (let iter = 1; iter < roundsLength; iter += 1) {
    if (iter === hidden) {
      result += `${miss} ${colon}`;
    } else {
      result += `${miss} ${start + iter * step}`;
    }
  }
  return cons(result, colonPosition);
};

const game = () => {
  const startPoint = generateNum(1, 50);
  const progresStep = generateNum(2, 5);
  const hiddenElemntPosition = generateNum(1, 9);

  const question = String(car(numberOfSteps(startPoint, progresStep, hiddenElemntPosition)));
  const correctAnswer = String(cdr(numberOfSteps(startPoint, progresStep, hiddenElemntPosition)));
  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
