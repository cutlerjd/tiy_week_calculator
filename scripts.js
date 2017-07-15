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
    if(toggle){
      lcd.innerHTML = ''
      toggle = false
    }
    let lcd_text = document.createTextNode(evt.target.dataset.value)
    lcd.appendChild(lcd_text)
    console.log(valuesArray)
    console.log(operatorsArray)
  } else if(evt.target.dataset.value){
    if(valuesArray.length<1){
      valuesArray.push(lcd.innerHTML)
      operatorsArray.push(evt.target.dataset.value)
      console.log(valuesArray)
      console.log(operatorsArray)
      toggle = true
    }else {
      valuesArray.push(lcd.innerHTML)
      lcd.innerHTML = maths(valuesArray[0],valuesArray[1],operatorsArray[0])
      valuesArray.splice(0)
      operatorsArray.splice(0)
      toggle = true
      valuesArray.push(lcd.innerHTML)
      operatorsArray.push(evt.target.dataset.value)
      console.log(valuesArray)
      console.log(operatorsArray)
    }
  }else{
    valuesArray.push(lcd.innerHTML)
    lcd.innerHTML = maths(valuesArray[0],valuesArray[1],operatorsArray[0])
    toggle = true
    valuesArray.splice(0)
    operatorsArray.splice(0)
    console.log(valuesArray)
    console.log(operatorsArray)
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
