// stampa dei numeri da 1 a 100

console.log("Colonna numerica");
const i=0;
for(let i=1; i<=100; i++) {

// uso dell'operatore logico AND per i multipli di 3 e 5 con priorità

if (i % 3 === 0 && i % 5 === 0) {
console.log("FizzBuzz")
}

// determinazione multiplo di 3

else if (i % 3 === 0) {
console.log("Fizz")}

// determinazione multiplo di 5

else if(i % 5 === 0) {
console.log("Buzz")
}

// casistica finale priva di condizioni

else {
console.log(i)
}

}