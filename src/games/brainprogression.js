import { cons, car, cdr } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?\n';

const game = () => {
  const generateNumberOne = generateNum(1, 50);
  const generateStep = generateNum(2, 5);
  const generatePosition = generateNum(1, 9);

  const numberSteps = (a, b, c) => {
    let result1 = String(a);
    let result2 = Number(result1) + b;
    let iter = 1;
    let result3 = 0;
    const colon = ':';
    const miss = ' ';
    while (iter < 10) {
      if (iter === c) {
        result1 += `${miss} ${colon}`;
        result3 = result2;
      } else {
        result1 += `${miss} ${result2}`;
      }
      result2 += b;
      iter += 1;
    }
    return cons(result1, result3);
  };

  const question = String(car(numberSteps(generateNumberOne, generateStep, generatePosition)));
  const correctAnswer = String(cdr(numberSteps(generateNumberOne, generateStep, generatePosition)));


  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
