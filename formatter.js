export function formatJoke(joke) {
  return `
=== NOTÍCIA URGENTE ===

${joke.local}, ${joke.personagem} tentou ${joke.objetivo}.

A iniciativa fracassou porque ${joke.problema}.

${joke.resultado}.
`;
}