let wrapper = document.getElementsByClassName('bottomButtons')[0]
let lcd = document.getElementById('lcd')
let clear = document.getElementById('C')
let toggle = false
clear.addEventListener('click', function(event){
  lcd.innerHTML = ''
})

wrapper.addEventListener('click', function(event){
  if(event.target.dataset.value){
    if(toggle){
      lcd.innerHTML = ''
      toggle = false
    }
    let lcd_text = document.createTextNode(event.target.dataset.value)
    lcd.appendChild(lcd_text)
  } else if(event.target.dataset.function == "=") {
    lcd.innerHTML = eval(lcd.innerHTML)
    toggle = true
  }
})

// arrayButtons.forEach(function(item){
//   console.log(item.id)
//   //let button = document.getElementById(item.id)
// })
// //console.log(arrayButtons.filter(function(item){item.}))
