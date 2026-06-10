import {
  getPersonagens,
  getObjetivos,
  getProblemas,
  getResultados,
  getLocais
} from './JokeRepository.js';

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

export function generateJoke() {
  const personagem = getRandomItem(getPersonagens());
const objetivo = getRandomItem(getObjetivos());
const problema = getRandomItem(getProblemas());
const resultado = getRandomItem(getResultados());
const local = getRandomItem(getLocais());

  return {
    local,
    personagem,
    objetivo,
    problema,
    resultado
  };
}