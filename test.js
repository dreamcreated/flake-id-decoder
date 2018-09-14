#!/usr/bin/env node

let FlakeId = require('flake-idgen');
let flakeIdDecoder = require('./flake-id-decoder');

var m_idGen = new FlakeId({datacenter:0, worker:0, epoch: 0});

let id = m_idGen.next();

console.log(flakeIdDecoder.getTimestamp(id));
