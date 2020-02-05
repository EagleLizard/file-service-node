
const { promisify } = require("util");
const fs = require('fs');
const lstat = promisify(fs.lstat);

const DATA_PATH = `${__dirname}/data`;

module.exports = {
  init,
};

function init(app) {
  app.get('/hello', helloGetCtrl);
  app.get('/:file', fileGetCtrl);
  return app;
}

function helloGetCtrl(req, res) {
  return res.json({
    message: 'File Service',
  });
}

async function fileGetCtrl(req, res) {
  let fileName, filePath, fileExists, fileStream;
  fileName = req.params.file;
  filePath = `${DATA_PATH}/${fileName}`;
  fileExists = await exists(filePath);
  if(!fileExists) {
    res.status(404).json({error: 'not found'});
    return;
  }
  fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}

async function exists(filePath) {
  let stats;
  try {
    stats = await lstat(filePath, fs.constants.F_OK);
  } catch(e) {
    if(e.code === 'ENOENT') {
      return false;
    }
    throw e;
  }
  return stats !== undefined;
}
