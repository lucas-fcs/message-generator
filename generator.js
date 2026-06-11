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

export async function generateJoke() {
  const personagem = getRandomItem(await getPersonagens());
  const objetivo = getRandomItem(await getObjetivos());
  const problema = getRandomItem(await getProblemas());
  const resultado = getRandomItem(await getResultados());
  const local = getRandomItem(await getLocais());

  return {
    local,
    personagem,
    objetivo,
    problema,
    resultado
  };
}