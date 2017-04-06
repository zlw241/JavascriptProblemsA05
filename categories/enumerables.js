//// Enumerables ////

// Write a method that returns an array of all factors of a number
function factors(num) {
  let _factors = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      _factors.push(i);
    }
  }
  return _factors;
}

console.log(factors([20]));

// Write a method that doubles each element in an array

function doubler(array) {
  return array.map((el) => el*2);
}

console.log(doubler([1,2,3,4,5,6,7,8,9,10]));

// Write a method that returns an array of the first n number of primes numbers
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primes(n) {
  let primeNums = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i) === true) {
      primeNums.push(i);
    }
  }
  return primeNums;
}

console.log(primes(50));

Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
};

[1,2,3,4,5,6].myEach((el) => {
  console.log(el * 2);
});

Array.prototype.mySelect = function (func) {
  let results = [];
  this.myEach((el) => {
    if (func(el) === true) {
      results.push(el);
    }
  });
  return results;
};

console.log([1,2,3,4,5].mySelect((el) => {
  return (el % 2 === 0);
}));

Array.prototype.myReject = function () {

};

Array.prototype.myAny = function () {

};

Array.prototype.myAll = function () {

};

Array.prototype.myFlatten = function () {
  
};

// Write a version of flatten that only flattens n levels of an array.
Array.prototype.myControlledFlatten = function () {

};

Array.prototype.myZip = function () {

};

Array.prototype.myRotate = function (num = 1) {

};

Array.prototype.myJoin = function (str = "") {

};

Array.prototype.myReverse = function () {

};
