import Mod1 from './mod-1.js';
import Mod2 from './mod-2.js';

import num from './mod-3.js';
console.log(`num: ${num}`);

import {name, age} from './mod-4.js';
console.log(`name: ${name}, age: ${age}`);

import person from './mod-4.js';
console.log(`person: ${person}`);

console.log(`Mod1.num = ${Mod1.num}`)
Mod1.increase();
console.log(`Mod1.num = ${Mod1.num}`)
Mod2.increase();
console.log(`Mod1.num = ${Mod1.num}`)