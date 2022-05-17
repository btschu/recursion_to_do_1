// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function recursiveSigma(num) {
    if (num <= 0) {
        return 0;
    }
    return num + recursiveSigma(num-1);
}

console.log(recursiveSigma(5)); //15
console.log(recursiveSigma(2.5)); //4.5
console.log(recursiveSigma(0)); //0
console.log(recursiveSigma(-1)); //0
console.log(recursiveSigma(10)); //55