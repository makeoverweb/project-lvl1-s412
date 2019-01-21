import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const minStartPoint = 1;
const maxStartPoint = 50;
const minStep = 1;
const maxStep = 15;

const getProgression = (start, step, hidden) => {
  let result = '';
  const length = 10;
  for (let iter = 0; iter < length; iter += 1) {
    result += (iter === hidden) ? '.. ' : `${start + iter * step} `;
  }
  return result;
};

const game = () => {
  const startPoint = generateNum(minStartPoint, maxStartPoint);
  const progressionStep = generateNum(minStep, maxStep);
  const hiddenElemntPosition = generateNum(0, lengthProgression - 1);
  const newProgression = String(getProgression(startPoint, progressionStep, hiddenElemntPosition));

  const question = String(newProgression);
  const correctAnswer = String(startPoint + progressionStep * hiddenElemntPosition);
  return cons(question.trim(), correctAnswer);
};

export default () => engineGame(description, game);
