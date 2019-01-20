import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const minStartPoint = 1;
const maxStartPoint = 50;
const minProgresStep = 2;
const maxProgresStep = 2;

const getProgression = (start, step, hidden) => {
  const colon = ' ..';
  let result = '';
  for (let iter = 1; iter <= lengthProgression; iter += 1) {
    if (iter === hidden) {
      result += `${colon}`;
    } else {
      result += ` ${start + iter * step}`;
    }
  }
  return result;
};

const game = () => {
  const startPoint = generateNum(minStartPoint, maxStartPoint);
  const progresStep = generateNum(minProgresStep, maxProgresStep);
  const hiddenElemntPosition = generateNum(minStartPoint, lengthProgression);
  const progressionNumber = String(getProgression(startPoint, progresStep, hiddenElemntPosition));

  const question = String(progressionNumber);
  const correctAnswer = String(startPoint + progresStep * hiddenElemntPosition);
  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);
