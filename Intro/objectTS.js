"use strict";
// objects in TS
Object.defineProperty(exports, "__esModule", { value: true });
function createInfo(_a) {
    var string = _a.name, number = _a.age;
}
var showInfo = { name: "Anmol", age: 29, email: "aj@gmail.com" };
var info = createInfo(showInfo);
console.log(info);
