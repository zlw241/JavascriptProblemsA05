//// Recursion ////

// Write a recursive method that returns the first "num" factorial numbers.
function digitalRoot(num) {

}

// Write a recursive method that returns an array of first n number of factorials
function factorialsRec(num) {
  if (num === 1) {
    return [1];
  } else {
    let prev = factorialsRec(num-1);
    return prev.concat([prev[prev.length-1] * (num-1)]);

  }
}

console.log(factorialsRec(3));
console.log(factorialsRec(4));
console.log(factorialsRec(5));
console.log(factorialsRec(6));

// Write a recursive method that returns an array of numbers between min and max
function range(min, max, step=1) {
  if (min > max) {
    return [];
  } else if (min === max) {
    return [max];
  } else {
    return [min].concat(range(min+step, max, step));
  }
}

console.log(range(0,28,7));


// Write a recursive method that returns the sum of all elements in an array
function sum(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    return nums[0] + sum(nums.slice(1));
  }
}

console.log(sum([6,5,4,3,2,1]));

// Write a recursive method that exponentiates base ** power without using the ** method
function exp(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * exp(base, power-1);
  }
}

console.log(exp(2,3));


// Write a recursive method that deep dups an array
Array.prototype.deepDup = function () {

};


// Write a recursive method that returns the first n number of fibonacci numbers in an array
function fibsRec(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    let prevFibs = fibsRec(n-1);
    let len = prevFibs.length - 1;
    let prev = prevFibs[len];
    let prevprev = prevFibs[len-1];
    return prevFibs.concat([prev+prevprev]);
  }
}

console.log(fibsRec(20));

// Let's write a method that will solve Gamma Function recursively. The Gamma
// Function is defined Γ(n) = (n-1)!.

function gammaFnc () {

}

//I highly doubt that anything below will be on the test, but it's good practice

// Write a recursive method subsets that will return all subsets of an array.
function subsets(array) {

}



// Write a recursive method that returns all of the permutations of an array
function permutations(array) {

}


// Write a recursive method that returns an array of the best change given a target amouunt
function makeChange(target, coins = [25, 10, 5, 1]) {

}


// Write a recursive method that takes a Fixnum and converts it to a string in a different base
// Do not use the built-in #to_s(base) method.
// |Base 10 (decimal)     |0   |1   |2   |3   |....|9   |10  |11  |12  |13  |14  |15  |
// |Base 2 (binary)       |0   |1   |10  |11  |....|1001|1010|1011|1100|1101|1110|1111|
// |Base 16 (hexadecimal) |0   |1   |2   |3   |....|9   |A   |B   |C   |D   |E   |F   |

Number.prototype.stringify = function () {

};


// Write a recursive method that returns the sum of the first n even numbers
function firstEvenNumbersSum(n) {

}

Function.prototype.inherits = function(parentClass) {
  this.prototpe = Object.create(parentClass.prototype);
  this.constructor = this;
  return this;
};
