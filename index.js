'use strict';
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
  sourceFile: 'SOME-EXCEL-FILE.xlsx',
  columnToKey: {
    A: 'dns',
    B: 'sefId',
    C: 'sefValidTill',
  },
});

console.log(result);
