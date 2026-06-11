import { readFile } from 'fs/promises';
import jokesData from './data/jokes.json' with { type: 'json' };
import jokeData from './data.js';

async function getJokesData() {
  const data = await readFile('./data/jokes.json', 'utf-8');

  return JSON.parse(data);
}

export async function getPersonagens() {
  const jokesData = await getJokesData();

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