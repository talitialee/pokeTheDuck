/* Reload : onclick, set duck position to initial */
function reload() {
  document.getElementById('canard1').style.left= 0 + "px";
  document.getElementById('canard1').style.top= 0 + "px"; // duck goes back to initial position
  
  document.getElementById('coin').style.display = "none"; // coin disappears
}


/* Change canard img when hover */
function canardHover() {
    canard1img.src = 'resources/Meh2.png';
}

function imgHover2() {
    canard1img.src = 'resources/Canardrepos4.gif';
}



/* Quack sounds */
function playAudio() {
  new Audio('resources/quack.mp3').play();
}

/* Writes Coin message */

console.log("La largeur du container est de : " + containerWidth + "px");
console.log("La hauteur du container est de : " + containerHeight + "px");



function coin() {
  let y = document.getElementById("coin").offsetLeft;
  let z = document.getElementById("coin").offsetTop;
  let containerWidth = document.getElementById("duckContainer").offsetWidth;
  let containerHeight = document.getElementById("duckContainer").offsetHeight;


       document.getElementById('coin').style.display = ('block');
       y = 50;
       y = (Math.random() * containerWidth - 200) + y;
        if(y < 0 || y > (containerWidth-50)) {
              y = 100;
        }
      document.getElementById('coin').style.left = (y + 'px');
  
       z =100;
       z = (Math.random() * 200) + z;
         if(z < 0 || z > (containerHeight-50)) {
             z = 100;
        }
      document.getElementById('coin').style.top = (z + 'px');

}





/* Move the duck */
/* Clic = il va soit à gauche, soit à droite */


function left() {
  let x = document.getElementById("canard1").offsetLeft;
 
  document.getElementById('canard1img').classList = ('toLeft'); // Changer d'image

  console.log("la valeur initiale de x est " + x);
  let step = ((Math.random() * 51));
   x=- step;
  console.log("la valeur de step vers la gauche est : "+ step);
  
  if (x<0) {
      x=10;
  }
  document.getElementById('canard1').style.left= x + "%";  

}

function right() {
  let x = document.getElementById("canard1").offsetLeft;
 
  document.getElementById('canard1img').classList = ('toRight');
  let containerWidth = document.getElementById("duckContainer").offsetWidth;

  let step = ((Math.random() * 51));
  x=+ step;
    console.log("la valeur de step vers la droite est : "+ step);
  
  if (x >= containerWidth) {
    console.log("la valeur de x vers la droite est : "+ x);
    x=50;
  }
  document.getElementById('canard1').style.left= x + "%";

}



function leftOrRight() {
  canard1img.src = 'resources/Duckwalk4.gif';
  
  if(canard1img.classList.contains("toRight")) {   
    left();
  }   
  else {
  document.getElementById('canard1img').classList=('toRight');
  right();
  console.log(x);} 
  }


