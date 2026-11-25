#!/usr/bin/env node
// @nx-target-name: serve
import { createUser } from '@org/models';
import { greet } from '@org/utils';

console.log('api-two', greet(createUser('Ada').name));
