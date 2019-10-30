var cpfValidator = require('./cpf.js');

const cpf = '99999999999';
const res = cpfValidator(cpf);

console.log(`CPF ${cpf} é ${res}`);
