function setup() {
  createCanvas(10000,5000)
  frog = loadImage("girl.jpg")
   background(0);
}

function draw () { 


  for (i = 0; i <1000;i++) { 
  
    let car;x = random(width);
    let  me;y = random(height);
    let color;c = frog.get(x,y); 
    fill(c); 
    ellipse(x, y ,16,16) 

  
  } 
  
} 

