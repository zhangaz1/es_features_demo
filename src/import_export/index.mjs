import Mod1 from './mod-1';
import Mod2 from './mod-2';

import num from './mod-3.mjs';
console.log(`num: ${num}`);

import {name, age} from './mod-4.mjs';
console.log(`name: ${name}, age: ${age}`);

import person from './mod-4.mjs';
console.log(`person: ${person}`);

console.log(`Mod1.num = ${Mod1.num}`)
Mod1.increase();
console.log(`Mod1.num = ${Mod1.num}`)
Mod2.increase();
console.log(`Mod1.num = ${Mod1.num}`)