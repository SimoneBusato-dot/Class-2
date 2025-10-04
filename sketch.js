let w = 25;
let h = w;
let rows = 16;
let cols = rows;
let maxDepth = 31;
let depth = 0; // profondità iniziale
let speed = 0.2; // quanto velocemente cresce la profondità


function draw3DRect(x, y, w, h, depth, baseCol){
  for(let d = depth; d>0; d--){
    fill('#96610dff');
    rect(x + d*-0.8, y - d*0.8, w, h);
  }
  fill(baseCol);
  rect(x, y, w, h);
}

function setup(){
  createCanvas(400, 400);
  //noLoop();
  noStroke();
  background("#ffe7c1");
}

function draw() {
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      
      if(i >= 0 && i <= 15 && j >= 0 && j <= 15 && (i+j) % 2 == 0){
        draw3DRect(2*i*w, j*h, w, h, depth, color(random([ '#fcad2a'])));
      }

    }
  }
  // Aggiorna profondità
  depth += speed;
  if(depth > maxDepth){
    depth = maxDepth; // ferma l'animazione alla profondità massima
  }
}