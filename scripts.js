var wrapper = document.getElementsByClassName('wrapper')[0]

wrapper.addEventListener('click', function(e){
  var clicked = e.target.dataset.value

  console.log(clicked)
})

// arrayButtons.forEach(function(item){
//   console.log(item.id)
//   //let button = document.getElementById(item.id)
// })
// //console.log(arrayButtons.filter(function(item){item.}))
