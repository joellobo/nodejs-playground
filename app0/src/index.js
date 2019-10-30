import 'dotenv/config';
import cpfValidator from './cpf';

console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);

console.log(cpfValidator('999999999'));