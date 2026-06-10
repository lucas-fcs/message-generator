import jokesData from './data/jokes.json' with { type: 'json' };
import jokeData from './data.js';

export function getPersonagens() {
  return jokesData.personagens;
}

export function getObjetivos() {
  return jokeData.objetivos;
}

export function getProblemas() {
  return jokeData.problemas;
}

export function getResultados() {
  return jokeData.resultados;
}

export function getLocais() {
  return jokeData.locais;
}