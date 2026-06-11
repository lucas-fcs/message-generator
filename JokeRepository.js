import { readFile } from 'fs/promises';


async function getJokesData() {
  const data = await readFile('./data/jokes.json', 'utf-8');

  return JSON.parse(data);
}

export async function getPersonagens() {
  const jokesData = await getJokesData();

  return jokesData.personagens;
}

export async function getObjetivos() {
  const jokesData = await getJokesData();

  return jokesData.objetivos;
}

export async function getProblemas() {
  const jokesData = await getJokesData();

  return jokesData.problemas;
}

export async function getResultados() {
  const jokesData = await getJokesData();

  return jokesData.resultados;
}

export async function getLocais() {
  const jokesData = await getJokesData();

  return jokesData.locais;
}
export async function getAllData() {
  return await getJokesData();
}