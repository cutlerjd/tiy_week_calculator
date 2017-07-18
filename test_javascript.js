let valuesArray = [3, 4, 2, 1, 6, 2]
let operatorsArray = ["+", "*", "-", "/", "+"]

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
  console.log(valuesArray)
  console.log(operatorsArray)
}

function indexProcessor(i) {
  arrayMath(i)
}
console.log(valuesArray)
console.log(operatorsArray)
// findIndex()
// indexProcessor(1)
// findIndex()
// indexProcessor(2)
// findIndex()
// indexProcessor(0)
// findIndex()
// indexProcessor(0)
// findIndex()
// indexProcessor(0)


function findIndex() {
  let iM = operatorsArray.findIndex(function (item) {
    if (item == "*" || item == "/") {
      return true
    } else if (item == "*" || item == "/") {
      return true
    }
  })
  console.log(iM)
  return iM
}

function pemda() {
  console.log("Hello")
  while (operatorsArray.length > 0) {
    findIndex()
    arrayMath(findIndex())
    console.log(valuesArray)
    console.log(operatorsArray)
  }
}
pemda()
