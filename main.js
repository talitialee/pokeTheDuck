let thirstlevel = Math.floor((Math.random() * 21) + 5);

// Generate a random number for the thirst level and display it //
function thirstGenerator() {
  
  document.getElementById('thirst').innerHTML = thirstlevel;
  if (thirstlevel < 50) {
    document.getElementById('output').innerHTML = "I am thirsty !";
  }
   else {
     document.getElementById('output').innerHTML = "I am good !";
  }
  
};

// Water the plant: button = thirstlevel + 10.//
// Change the image if too watery + message + change color //
function myFunction() {
  thirstlevel += 10;
  document.getElementById('thirst').innerHTML = thirstlevel;
  if (thirstlevel > 70) {
    document.getElementById('myPlant').src = 'resources/Plante4.png';
    document.getElementById('output').innerHTML = "AaAaaAargh whyYyYyy";
    document.getElementById('thirst').style.color = "var(--red)";
    document.getElementById('output').style.color = "var(--red)";
    document.getElementById('intro').style.display = "none";
    document.getElementById('body').className = "bg2"; 
    
  }

   
  else if (thirstlevel > 50) {
   document.getElementById('output').innerHTML = "Moooore !"; document.getElementById('myPlant').src="resources/Plante3.png";
  }

  else if (thirstlevel > 30) {
    document.getElementById('output').innerHTML = "Moooore !"; document.getElementById('myPlant').src="resources/Plante2.png";
   }

   else if (thirstlevel <= 30) {
    document.getElementById('output').innerHTML = "Moooore !"; document.getElementById('myPlant').src="resources/Plante1.png";
   }
  
}

