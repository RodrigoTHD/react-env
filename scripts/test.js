process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

require('../config/env');
const jest = require('jest');

const argv = process.argv.slice(2);

if (argv.indexOf('--watch') === -1) {
  argv.push('--watchAll');
}

jest.run(argv);
