function sum(a: number, b: number) {
  return a + b
}

let result = sum(10, 100);
console.log(result)

// passing default values in TS functions 

function loginUser(name: string, email: string, isLoggedIn: boolean = true) {
    return "Login Details: " + "" + name + "" + email + "" + isLoggedIn
}

var show = loginUser("Anmol", "anmol@gmail.com");
console.log(show);

// arrow functions in TS

const multiply = (a: number, b: number) : number => {
  return a * b;
}

let output = multiply(10, 50);
console.log(output);




