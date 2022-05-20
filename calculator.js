function add(x, y) {
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return false;
  }
  return parseInt(x, 10) + parseInt(y, 10);
}

function subtract(x, y) {
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return false;
  }
  return x - y;
}

function multiply(x, y) {
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return false;
  }
  return x * y;
}

function divide(x, y) {
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return false;
  }
  return x / y;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
