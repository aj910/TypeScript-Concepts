// objects in TS

function createInfo({name: string, age: number}) {}

const showInfo = {name: "Anmol", age: 29, email: "aj@gmail.com"}

const info = createInfo(showInfo);
console.log(info);
