//import jwt from './modules/jwt';

const jwt = require('./modules/jwt');

jwt.option = {
    type: 'PDF',
    validate: true
};

const content = jwt.load();