#!/usr/bin/env node
const program = require('commander')

program
  .description('Will build the default API structure for your project.')
  .option('-p, --path', 'Set the default path.')
  .parse(process.argv)

const defaultPath = './'

var path = program.args[0] !== undefined
  ? program.args[0]
  : defaultPath

console.log(path)