function sum(a, b) {
    return a + b;
}
var result = sum(10, 100);
console.log(result);
// passing default values in TS functions 
function loginUser(name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = true; }
    return "Login Details: " + "" + name + "" + email + "" + isLoggedIn;
}
var show = loginUser("Anmol", "anmol@gmail.com");
console.log(show);
// arrow functions in TS
var multiply = function (a, b) {
    return a * b;
};
var output = multiply(1, 50);
console.log(output);
