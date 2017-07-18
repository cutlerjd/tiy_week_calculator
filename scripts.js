let wrapper = document.getElementsByClassName('bottomButtons')[0]
let lcd = document.getElementById('lcd')
let clear = document.getElementById('C')
let toggle = false

let valuesArray = []
let operatorsArray = []

clear.addEventListener('click', function(event){
  lcd.innerHTML = ''
  valuesArray.splice(0)
  operatorsArray.splice(0)
})

wrapper.addEventListener('click',function(evt){
  if(evt.target.dataset.value % 1 === 0 || evt.target.dataset.value == "."){
    //This handles new functions and clears the LCD
    if(toggle){
      lcd.innerHTML = ''
      toggle = false
    }
    let lcd_text = document.createTextNode(evt.target.dataset.value)
    lcd.appendChild(lcd_text)
  } else if(evt.target.dataset.value){
      valuesArray.push(lcd.innerHTML)
      operatorsArray.push(evt.target.dataset.value)
      //This is to make sure the next value will not clear the LCS
      toggle = true
    }
  else{
    valuesArray.push(lcd.innerHTML)
    pemda()
    toggle = true
    lcd.innerHTML = ''
    lcd.innerHTML = valuesArray[0]
    valuesArray.splice(0)
  }
})

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

//This code will work and run the calculator. Re-writing to not use evil eval
// wrapper.addEventListener('click', function(event){
//   if(event.target.dataset.value){
//     if(toggle){
//       lcd.innerHTML = ''
//       toggle = false
//     }
//     let lcd_text = document.createTextNode(event.target.dataset.value)
//     lcd.appendChild(lcd_text)
//   } else if(event.target.dataset.function == "=") {
//     lcd.innerHTML = eval(lcd.innerHTML)
//     toggle = true
//   }
// })
