let valuesArray = [3, 4, 2, 1, 6, 2]
let operatorsArray = ["+", "*", "-", "*", "+"]

function maths(num1, num2, ops) {
  if (ops == "*") {
    return num1 * num2;
  } else
    if (ops == "/") {
      return num1 / num2;
    } else
      if (ops == "+") {
        return num1 + num2;
      } else
        if (ops == "-") {
          return num1 - num2;
        }
}

function arrayMath(indexNum) {
  holdMyBeer = maths(valuesArray[indexNum], valuesArray[indexNum + 1], operatorsArray[indexNum]);
  valuesArray.splice(indexNum, 1);
  operatorsArray.splice(indexNum, 1);
  valuesArray[indexNum] = holdMyBeer;
}

function indexProcessor(i) {
  arrayMath(i)
}

function findIndex() {
  console.log(valuesArray)
  console.log(operatorsArray)
  let iM = operatorsArray.findIndex(function (item) {
    if (item == "*" || item == "/") {
      return true
    }
  })
  if (iM < 0) {
    iM = 0;
  }
  console.log(iM)
  return iM
}

function pemda() {
  while (operatorsArray.length > 0) {
    findIndex()
    arrayMath(findIndex())
  }
}
pemda()
