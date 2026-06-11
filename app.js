import { generateJoke } from './generator.js';
import { formatJoke } from './formatter.js';

async function main() {
  const joke = await generateJoke();

  const formattedJoke = formatJoke(joke);

  console.log(formattedJoke);
}

main();