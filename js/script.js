// stampa dei numeri da 1 a 100

console.log("Colonna numerica");
const i=0;
for(let i = 1; i<=100; i++) {

// stampa per i multipli di 3 e 5

if(i % 3 === 0) {
console.log("Fizz")}

else if(i % 5 === 0) {
console.log("Buzz")
}

else if (i % 3 === 0 && i % 5 === 0) {
console.log("FizzBuzz")
}

else {
console.log(i)
}

}