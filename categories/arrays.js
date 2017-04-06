//// Arrays ////


// Write a method that returns an array of all of the pairs of indexes whose
// elements sum to zero
Array.prototype.twoSum = function () {

};

// Write a method that returns an object (all objects in JS are hashes, basically) containing any repeating elements as keys
// with the values set to an array of the indexes of each repeat

Array.prototype.dups = function () {
  let dupsHash = {};
  for (let i = 0; i < this.length; i++) {
    if (dupsHash[this[i]] === undefined) {
      dupsHash[this[i]] = 1;
    } else {
      dupsHash[this[i]] += 1;
    }
  }
  let dups = [];
  for (let key in dupsHash) {
    if (dupsHash[key] > 1) {
      dups.push(key);
    }
  }
  return dups;
};

// Write a method that returns the sum of all elements in the array

Array.prototype.sum = function () {
  return this.reduce((acc, el) => acc + el);
};

// Write a method that squares each element in the array

Array.prototype.squareSelf = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] *= this[i];
  }
  return this;
};

// Write a method that squares each element in the array, but does not modify the array

Array.prototype.square = function () {
  let squares = [];
  for (let i = 0; i < this.length; i++) {
    squares.push(this[i] * this[i]);
  }
  return squares;
};

// Write a method that returns all of the unique elements in an array

Array.prototype.myUniq = function () {
  let uniq = [];
  let itemDict = {};
  for (let i = 0; i < this.length; i++) {
    if (itemDict[this[i]] === undefined) {
      uniq.push(this[i]);
      itemDict[this[i]] = true;
    }
  }
  return uniq;
};

// Write a method that tranposes an array (see Array#transpose)

Array.prototype.myTranspose = function () {
  let transposed = [];
  for (let i = 0; i < this.length; i++) {
    let tempTranspose = [];

    for (let j = 0; j < this.length; j++) {
      tempTranspose.push(this[j][i]);
    }
    transposed.push(tempTranspose);
  }
  return transposed;
};

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function () {
  let sorted = this.sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    let lowerIndex = (sorted.length / 2) - 1;
    let upperIndex = (sorted.length / 2);
    return (sorted[lowerIndex] + sorted[upperIndex]) / 2.0;
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
};


console.log([2,2,3,4,5,6,6,7,8,8].dups());
console.log([1,2,3,4,5,6,7,8,9].squareSelf());
console.log([1,2,3,4,5,6,7,8,9].square());
console.log([2,2,3,4,5,6,6,7,8,8].myUniq());
console.log([2,2,3,4,5,6,6,7,8,8].sum());

console.log([[1,2,3], [5,6,7], [9,10,11]].myTranspose());
console.log([10,9,8,7,6,5,4,3,2,1].median());
console.log([4,3,2].median());
