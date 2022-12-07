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

/* Coin coin */


function coin() {
    new Audio('resources/quack.mp3').play();
    let y = document.getElementById("coin").offsetLeft;
    let z = document.getElementById("coin").offsetTop;
       document.getElementById('coin').style.display = ('block');
  y = 50;
  y = (Math.random() * 600) + y;
document.getElementById('coin').style.left = (y + 'px');
  z =50;
   z = (Math.random() * 200) + z;
document.getElementById('coin').style.top = (z + 'px');

}


/* Move the duck */
/* Clic = il va soit à gauche, soit à droite */


function leftOrRight() {
    canard1img.src = 'resources/Duckwalk4.gif';
    let x = document.getElementById("canard1").offsetLeft;
var step = ((Math.random() * 501)+100);
  if(canard1img.classList.contains("toRight")) {   
     document.getElementById('canard1img').classList = ('toLeft');
    x= x - step;
document.getElementById('canard1').style.left= x + "px";} 
  
  else {
  document.getElementById('canard1img').classList=('toRight');
    x= x + step;
document.getElementById('canard1').style.left= x + "px";} 
  }



/* OLD */

function droite() {
  document.getElementById('canard1img').classList.add('toRight');
  if(canard1img.classList.contains("toRight") && (x < 500)) {   x= x + step;
document.getElementById('canard1').style.left= x + "px";}

}

/* Aller à gauche */

function gauche() {
  
 document.getElementById('canard1img').classList=("toLeft");
 if(x>0){
   x= x - step;
document.getElementById('canard1').style.left= x + "px"; 
 }
}
  
