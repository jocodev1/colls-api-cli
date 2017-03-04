#!/usr/bin/env node
const program = require('commander')

program
  .version('1.0.0')
  .usage('<command> [options]')
  .description('Collsf Framework\n\n    A Node JS API framework with a command line interface to automatically build your file structure.')
  .command('build [path]', 'Build the default Colls Framework API.')
  .parse(process.argv)

if (!program.args.length) program.help()
