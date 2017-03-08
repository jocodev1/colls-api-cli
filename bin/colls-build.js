#!/usr/bin/env node
const program = require('commander')
const request = require('request')
const generate = require('../lib/generate')

program
  .description('Will build the default API structure for your project.')
  .option('-p, --path', 'Set the default path.')
  .parse(process.argv)

const defaultPath = './'

var path = program.args[0] !== undefined
  ? program.args[0]
  : defaultPath

// Padding
console.log()

// Generate default API structure
generate('.')