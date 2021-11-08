let colors = [
  "rgb(190, 17, 228)",
  "rgb(13, 164, 134)",
  "rgb(240, 114, 128)",
  "rgb(90, 112, 39)",
  "rgb(220, 74, 158)",
  "rgb(245, 14, 12)",
];
//let colors = [];

let circulos = document.querySelectorAll(".square");

let messageSpan = document.querySelector("#message");
let h1 = document.querySelector("h1");
let colorDisplay = document.querySelector("#colorDisplay");
let numberOfcirculos = 6 ;
let modeBtn = document.querySelector(".mode");
let botonReset = document.querySelector("#New");
let easy = document.querySelector("#easyBtn");
let hard = document.querySelector("#hardBtn");
// let linea2 = document.getElementById("line2");

//------------------------------------


for (let i = 0; i < circulos.length; i++) {
  circulos[i].style.backgroundColor = colors[i];
}

//reset();
botonReset.textContent = "Start";


easy.addEventListener("click", function () {
  numberOfcirculos = 3;
 easy.classList.add("selected");
 hard.classList.remove("selected");
 for (let i = 0; i < circulos.length; i++) {
// circulos[i].style.display="block"
    circulos[3].style.display = "None";
    circulos[4].style.display = "None";
    circulos[5].style.display = "None";

 }
});


hard.addEventListener("click", function () {
  numberOfcirculos = 6;
  hard.classList.add("selected");
  easy.classList.remove("selected");
  for (let i = 0; i < circulos.length; i++) {
  circulos[3].style.display = "block";
    circulos[4].style.display = "block";
    circulos[5].style.display = "block";
  
    }
});

botonReset.addEventListener("click", function () {
  reset();
});

function reset() {
  for (let i = 0; i < circulos.length; i++) {
    let Random = randomColor();
    colorDisplay.textContent = Random;

    //abajo tomo un circulo random
   let numeroRandom = Math.floor(Math.random() * numberOfcirculos);
   circulos[numeroRandom].style.backgroundColor = Random;

    botonReset.textContent = "New Colors";
    messageSpan.textContent = "";
   h1.style.backgroundColor = "";
  }
}


function setUpcirculos() {
  for (let i = 0; i < circulos.length; i++) {
    circulos[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === colorDisplay.textContent) {
        messageSpan.textContent = "¡¡Correct!!";
        botonReset.textContent = "Play Again!";
        h1.style.backgroundColor = clickedColor;

        //abajo fcn para tornar todos los circulos del mismo color
        function changeColors(color) {
          for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.backgroundColor = color;
          }
        }
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageSpan.textContent = "Try Again!";
        botonReset.textContent = "New Colors";
      }
    });
  }
}
setUpcirculos();

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
//randomColor();

/*
function generateRandomColors(num) {
  let array = [];
  for (let i = 0; i < num; i++);
  {
    array[i] = randomColor();
  }
  return array;
}
//generateRandomColors(255);*/



