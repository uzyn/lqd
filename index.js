#!/usr/bin/env node
'use strict';
const nopt = require('nopt');
const processor = require('./src/processor');

const knownOptions = {
  config: String,
  from: String,
  params: Array, // Constructor params
};

const shortHands = {
  c: ['--config'],
  f: ['--from'],
  p: ['--params'],
};

const options = nopt(knownOptions, shortHands);
const operation = options.argv.remain[0];

switch (operation) {
  case 'deploy':
  case 'd':
    processor.deploy(options);
    break;

  default:
    throw new Error('Unknown operation');
}

