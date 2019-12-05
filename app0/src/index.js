import jwt from './modules/jwt';
//const jwt = require('./modules/jwt');

const option = {
    type: 'PDF',
    validate: true
};

const content = jwt.load('', option);
console.log(`content:${content}`);