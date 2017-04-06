//// Strings ////

// Write a method that capitalizes each word in a string like a book title
// Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'
function titleize(title) {
  let capitalizedTitle = title.split(" ");
  for (let i = 0; i < capitalizedTitle.length; i++) {
    let word = capitalizedTitle[i];
    if (i === 0) {
      capitalizedTitle[i] = `${word[0].toUpperCase()}${word.slice(1)}`;
    } else if (word === 'a'){
      continue;
    } else if (word === 'and') {
      continue;
    } else if (word === 'of') {
      continue;
    } else if (word === 'over') {
      continue;
    } else if (word === 'the') {
      continue;
    } else {
      capitalizedTitle[i] = `${word[0].toUpperCase()}${word.slice(1)}`;
    }
  }
  return capitalizedTitle.join(" ");
}

// Write a method that translates a sentence into pig latin. You may want a helper method.
// 'apple' => 'appleay'
// 'pearl' => 'earlpay'
// 'quick' => 'ickquay'
String.prototype.piglatin = function() {
  if (this[0] === 'q') {
    return this.slice(2) + 'quay';
  } else if (this[0] === 'a') {
    return this + 'ay';
  } else if (this[0] === 'e') {
    return this + 'ay';
  } else if (this[0] === 'i') {
    return this + 'ay';
  } else if (this[0] === 'o') {
    return this + 'ay';
  } else if (this[0] === 'u') {
    return this + 'ay';
  } else {
    return this.slice(1) + `${this[0]}ay`;
  }
};

function translate(sentence) {
  let piglatinified = [];
  sentence.split(" ").forEach((el) => {
    piglatinified.push(el.piglatin());
  });
  return piglatinified.join(" ");
}

// Write a method that caesar shifts a string by a number of shifts
// You can ssume all characters are lowercase
function caesarCipher(str, shift) {
  let alphabet = "abcdefghijklmnopqrstuvqxyz";
  let cipherText = "";
  for (let i = 0; i < str.length; i++) {
    let shiftedIndex = (alphabet.indexOf(str[i]) + shift) % 26;
    cipherText += alphabet[shiftedIndex];
  }
  return cipherText;
}

// Write a method that sorts the characters in a string according to the order of an alphabet array
// Use alphabetical order by default if an alphabet is not provided
function jumbleSort(str, alphabet = null) {

}

// Write a method that returns all subwords within a string that are included in a dictionary array
String.prototype.realWordsInString = function (dictionary) {
  let realWords = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      let sub = this.substring(i, j+1);
      if (dictionary.indexOf(sub) !== -1) {
        realWords.push(sub);
      }
    }
  }
  return realWords;
};

// Write a method that returns all substrings that are also palindromes

String.prototype.symmetricSubstrings = function () {
  let substrings = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      let sub = this.substring(i,j+1);
      if (sub === sub.split("").reverse().join("")) {
        substrings.push(sub);
      }
    }
  }
  return substrings;
};

console.log(titleize("the lion, the witch, and the wardrobe"));
console.log(translate("apple"));
console.log(translate("pearl"));
console.log(translate("quick"));

console.log(caesarCipher("xyzabc", 3));

console.log("cat".realWordsInString(["cat", "a", "at"]));

console.log("hannah".symmetricSubstrings());
