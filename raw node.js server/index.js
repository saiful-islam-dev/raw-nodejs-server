// local module
const { a, add } = require("./local-1");
const {a:a2, add:add2} = require("./local-2.js")

console.log(add2(2, 3, 3));
console.log(a);
// built in module

const path = require("path");

console.log(path.parse("D:/Next level/Mission-2/index.js"));