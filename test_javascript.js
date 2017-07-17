let valuesArray = [3,4,2,1]
let operatorsArray = ["+","*","-"]

function maths(num1,num2,ops){
  if(ops == "*"){
    return num1 * num2;
  } else
  if(ops == "/"){
    return num1 / num2;
  } else
  if (ops == "+"){
    return num1 + num2;
  } else
  if(ops == "-"){
    return num1 - num2;
  }
}

function arrayMath(indexNum) {
    console.log(valuesArray)
    console.log(operatorsArray)
    holdMyBeer = maths(valuesArray[indexNum],valuesArray[indexNum+1],operatorsArray[indexNum]);
    valuesArray.splice(indexNum,1);
    operatorsArray.splice(indexNum,1);
    valuesArray[indexNum] = holdMyBeer;
    console.log(valuesArray)
    console.log(operatorsArray)
}

function findIndex(){
    let iM = -2
    let iP = -2
    while(iM !== -1){
        iM = operatorsArray.findIndex(function(item){
        if(item == "*" || item =="/"){
            return true
        }
    })
        if(iM > -1){
            arrayMath(iM)
        }
    }
  while(iP !== -1){
        iP = operatorsArray.findIndex(function(item){
        if(item == "*" || item =="/"){
            return true
        }
    })
    if(iP > -1){
      arrayMath(iP)
    }
  }
}

findIndex()
findIndex()
findIndex()