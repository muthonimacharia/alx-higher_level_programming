#!/usr/bin/node
//  script that concats 2 files

const fs = require('fs');
const firstFile = fs.readFileSync(process.argv[2]).toString();
const secondFile = fs.readFileSync(process.argv[3]).toString();
fs.writeFileSync(process.argv[4], (firstFile + secondFile));
