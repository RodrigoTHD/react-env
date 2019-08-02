const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const physicalPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  physicalPaths: {
    dotEnv: physicalPath('.env'),
    appSrc: physicalPath('./src'),
    appPath: physicalPath('.'),
    appBuild: physicalPath('./build'),
    appPublic: physicalPath('./public'),
    appIndexHtml: physicalPath('./public/index.html'),
    appIndexJs: physicalPath('./src/index.js')
  }
};
