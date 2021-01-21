function setup() { //runs once 
  createCanvas(720, 720);
  fill('blue');
  strokeWeight(1);
}

function draw() {
  background(220); 
  
  translate (60,60);

  
    quad (0,0, 
         300, 0, 
         300, 300, 
         0, 300); //increase x 300 pixels 
  
  quad (300,0,
       600, 0, 
       600, 300, 
       300, 300); 
  
  quad(0,300, 
      300,300, 
      300, 600,
      0, 600); //increse y 300 pixels 

  
  quad (300,300, 
       600,300, 
       600, 600,
       300, 600); //increase y 300 pizels 
  
  noLoop (); 
}