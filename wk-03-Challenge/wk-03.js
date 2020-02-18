// const btn = document.querySelector('button');
// const btn = document.querySelector(".buttonClass");
const btn = document.getElementsByClassName("buttonClass")[0];

let cosmin = document.querySelector("h1");
cosmin.textContent = "let's modifyf"

function random(number) {
  return Math.floor(Math.random() * (number+1));
}


// btn.onclick = function() {

function onClick() {

  const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  // document.body.style.backgroundColor = randomColor;
  // document.querySelector('.centre').style.backgroundColor = randomColor;
  document.getElementsByClassName('centre')[0].style.backgroundColor = randomColor;
  
  
  // let array = document.getElementsByClassName('centre');

  // array.forEach(element => {
  //   element.style.backgroundColor = randomColor;
  // });



  // console.log("hello");
  display(); // call display function from this one
}

function display(){

  console.log("Hello...")
}













//How about using this to make a dark/light mode for your portfolio site? Other ideas you could explore with this?

