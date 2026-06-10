import jokeData from './data.js';

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

export function generateJoke() {
  const personagem = getRandomItem(jokeData.personagens);
  const objetivo = getRandomItem(jokeData.objetivos);
  const problema = getRandomItem(jokeData.problemas);
  const resultado = getRandomItem(jokeData.resultados);
  const local = getRandomItem(jokeData.locais);

  return {
    local,
    personagem,
    objetivo,
    problema,
    resultado
  };
}