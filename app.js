import { generateJoke } from './generator.js';
import { formatJoke } from './formatter.js';

const joke = generateJoke();

const formattedJoke = formatJoke(joke);

console.log(formattedJoke);