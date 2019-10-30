import cpfValidator from './cpf';

const cpfValue = '99999999999';
const res = cpfValidator(cpfValue);

console.log(`CPF ${cpfValue} é ${res}`);

