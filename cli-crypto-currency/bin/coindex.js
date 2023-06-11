#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json');

program
.version(pkg.version)
.command('key','manage API Key -- https:// nomics.com')
.command('check', 'Check Coin Price Info')
.parse(process.argv);

console.log("hello sam");
console.log(process.argv);