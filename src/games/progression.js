import { cons, car, cdr } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';

const game = () => {
  const startPoint = generateNum(1, 50);
  const step = generateNum(2, 5);
  const hiddenElemntPosition = generateNum(1, 9);

  const isPrime = (start, steps, hidden) => {
    let result = String(start);
    let sumOfSteps = Number(result) + steps;
    let colonPosition = 0;
    const colon = ':';
    const miss = ' ';
    for (let iter = 1; iter < 10; iter += 1) {
      if (iter === hidden) {
        result += `${miss} ${colon}`;
        colonPosition = sumOfSteps;
      } else {
        result += `${miss} ${sumOfSteps}`;
      }
      sumOfSteps += steps;
      iter += 1;
    }
    return cons(result, colonPosition);
  };

  const question = String(car(isPrime(startPoint, step, hiddenElemntPosition)));
  const correctAnswer = String(cdr(isPrime(startPoint, step, hiddenElemntPosition)));

  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
