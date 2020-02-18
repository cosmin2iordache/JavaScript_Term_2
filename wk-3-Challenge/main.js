const btn = document.querySelector('button');

function random(cosmin) {
  return Math.floor(Math.random() * (cosmin+1));
}

btn.onclick = function() {
  const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  // document.body.style.backgroundColor = randomColor;
  // document.querySelector('.centre').style.backgroundColor = randomColor;
  document.getElementsByClassName('centre')[0].style.backgroundColor = randomColor;
  
  
  // let array = document.getElementsByClassName('centre');

  // array.forEach(element => {
  //   element.style.backgroundColor = randomColor;
  // });

}

//How about using this to make a dark/light mode for your portfolio site? Other ideas you could explore with this?


console.log("hello");