
const express = require('express');

const fileService = require('./file-service/file-service');

const FILE_SERVICE_PORT = 4001;

main();

function main() {
  let fileServiceApp;
  fileServiceApp = express();

  fileService.init(fileServiceApp);

  fileServiceApp.listen(FILE_SERVICE_PORT, () => {
    console.log(`File Service listening on port ${FILE_SERVICE_PORT}`);
  });
}
