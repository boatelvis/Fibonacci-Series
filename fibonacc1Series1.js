//Program to generate fibonacci series up to n terms

//Accept input from user
const num = parseInt(prompt('Enter the number of teerms'))
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series: ');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}