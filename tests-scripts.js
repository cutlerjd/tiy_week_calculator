let valuesArray = [3,4,2,1]
let operatorsArray = ["+","*","-"]

function maths(num1,num2,ops){
  if(ops == "*"){
    return num1 * num2
  } else
  if(ops == "/"){
    return num1 / num2
  } else
  if (ops == "+"){
    return num1 + num2
  } else
  if(ops == "-"){
    return num1 - num2
  }
}

function pemda(arrayOps){
  //Find operators that have * or /
  let iM = -2
  let iP = -2
  while(iM !== -1){
    let iM = arrayOps.findIndex(function(item){
      if(item == "*" || item =="/"){
        console.log(item)
        return true
      }
    })
    if(iM > -1){
      arrayMaths(iM)
      console.log(valuesArray + "first Pemda")
      console.log(operatorsArray)
    }
  }
  while(iP !== -1){
    let iP = arrayOps.findIndex(function(item){
      if(item == "+" || item == "-"){
        return true
      }
    })
    if(iP > -1){
      arrayMaths(iP)
      console.log(valuesArray + "second Pemda")
      console.log(operatorsArray)
    }
  }
}


function arrayMaths(indexer){
  console.log("Hi from ArraysMath")
  if(valuesArray.length >1){
    console.log("Hellowagain from ArraysMath")
  let newNum = maths(valuesArray[indexer],valuesArray[indexer + 1],operatorsArray[indexer])
  valuesArray[indexer] = newNum
  valuesArray.splice(indexer+1,1,1)
  operatorsArray.splice(indexer,1)
  console.log("Hellowagain from ArraysMath does it die here?")
}
}
console.log(pemda(operatorsArray))
