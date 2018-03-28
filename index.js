#!/usr/bin/env node

var allowedOptions = [
  {
    name: 'size',
    abbr: 's',
    help: 'image size',
    default: 80
  },
  {
    name: 'version',
    abbr: 'v',
    boolean: true,
    help: 'show version'
  },
  {
    name: 'help',
    abbr: 'h',
    help: 'show help',
    boolean: true
  }
]

var cliOpts = require('cliclopts')(allowedOptions)
var argv = require('minimist')(process.argv.slice(2), cliOpts.options())

if (argv.help) {
  console.log('Usage: gravatar-url [email address] [options]\n')
  console.log('    e.g. gravatar-url tom@myspace.com --size=200\n')
  cliOpts.print()
  process.exit()
}

if (argv.version) {
  console.log(require('./package.json').version)
  process.exit()
}

console.log(require('gravatar-url')(argv._[0], {size: argv.size}))
