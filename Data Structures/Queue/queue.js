let testqueue = [];
let i = 0;
let curx = 0;

function setup() {
  createCanvas(800,600);
  background(255);
  strokeWeight(2);
  fill(255);
  rect(500,100,50,25);
  fill(0);
  strokeWeight(1);
  text('ADD',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,50,25);
  fill(0);
  strokeWeight(1);
  text('REMOVE',510,165);
}

function draw(){
  background(255);
  strokeWeight(2);
  fill(255);
  rect(500,100,75,25);
  fill(0);
  strokeWeight(1);
  text('ADD',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,75,25);
  fill(0);
  strokeWeight(1);
  text('REMOVE',510,165);
  for(i=0;i<testqueue.length;i++){
    noFill();
    square(100+curx,200,25);
    stroke(0);
    text(testqueue[i],104+curx,216);
    curx+=30;
  }
  i=0;
  curx=0;
}

function addElement() {
  let n = prompt('Enter element: ','');
  testqueue.push(n);
}

function removeElement(){
  testqueue.shift();
}

function mouseClicked(){
  if(mouseX>500 && mouseX<575 && mouseY>100 && mouseY<125){
    addElement();
  }
  if(mouseX>500 && mouseX<575 && mouseY>150 && mouseY<175){
    removeElement();
  }
}