function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("Something");
  }
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Something Else");
  }
}

