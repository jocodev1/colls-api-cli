#!/usr/bin/env node
const path = require('path')
const program = require('commander')
const request = require('request')
const generate = require('../lib/generate')

program
  .description('Will build the default API structure for your project.')
  .option('-p, --path', 'Set the default path.')
  .parse(process.argv)

var to = path.resolve(program.args[1] || '.')

// Padding
console.log()

// Generate default API structure
generate(to)