import {
  personagens,
  objetivos,
  problemas,
  resultados,
  locais
} from './data.js';

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
export function generateJoke() {
  const personagem = getRandomItem(personagens);
  const objetivo = getRandomItem(objetivos);
  const problema = getRandomItem(problemas);
  const resultado = getRandomItem(resultados);
  const local = getRandomItem(locais);

  return `
=== NOTÍCIA URGENTE ===

${local}, ${personagem} tentou ${objetivo}.

A iniciativa fracassou porque ${problema}.

${resultado}.
`;
}