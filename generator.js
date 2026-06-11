import { getAllData } from './JokeRepository.js';

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

export async function generateJoke() {
  const data = await getAllData();

  const personagem = getRandomItem(data.personagens);
  const objetivo = getRandomItem(data.objetivos);
  const problema = getRandomItem(data.problemas);
  const resultado = getRandomItem(data.resultados);
  const local = getRandomItem(data.locais);

  return {
    local,
    personagem,
    objetivo,
    problema,
    resultado
  };
}