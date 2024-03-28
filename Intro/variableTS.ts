let message: string = "Hello Anmol!";

console.log(message);

// message = 10 // will throw an error: Type 'number' is not assignable to type 'string'

var num: number = 10;
console.log(num);
//num.toUpperCase() // will throw an error: Property 'toUpperCase' does not exist on type 'number'

export {} // temporarily added to remove redeclaration error of block scoped variables