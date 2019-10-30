import { cpfValidator } from 'cpf';

const cpf = '99999999999';
const res = cpfValidator(cpf);

console.log(`CPF ${cpf} é ${res}`);