import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (numberOfElements, progressionBase, firstElement) => {
  const progressionNumbers = [firstElement];

  for (let i = 1; i < numberOfElements; i += 1) {
    progressionNumbers.push(firstElement + i * progressionBase);
  }

  return progressionNumbers;
};

const generateQuestionAnswer = () => {
  const numberOfElements = getRandomInt(5, 10);
  const progressionBase = getRandomInt(1, 5);
  const firstElement = getRandomInt(0, 100);
  const progressionNumbers = generateProgression(numberOfElements, progressionBase, firstElement);
  const randomMissingElementIndex = getRandomInt(0, numberOfElements - 1);

  const answer = String(progressionNumbers[randomMissingElementIndex]);

  progressionNumbers[randomMissingElementIndex] = '..';

  const question = progressionNumbers.join(' ');

  return [question, answer];
};

const progressionBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default progressionBrainGames;
