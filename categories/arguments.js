// For all of these problems, do the first with 'arguments'
// and the second with the rest/spread operator

function argsSum () {
  let args = Array.prototype.arguments.slice(1);
  return args;
}

function restSum () {

}

Function.prototype.myBind = function(ctx) {

};

Function.prototype.myBind = function(ctx, ...bindArgs) {

};

Function.prototype.curry = function (ctx, numArgs) {
  let args = [];
  // const that = this;
  const _currying = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(ctx, args);
    } else {
      return _currying;
    }
  };

  return _currying;

};

function sum(...args) {
  return args.reduce((acc, el) => acc + el);
}

let sum6 = sum.curry({}, 3);
console.log(sum6(6)(5)(1));

Function.prototype.spreadCurry = function (numArgs) {

};
