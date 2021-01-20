let teststack = [];
let i = 0;
let cury = 0;

function setup() {
  createCanvas(800,600);
  background(255);
  strokeWeight(2);
  fill(255);
  rect(500,100,50,25);
  fill(0);
  strokeWeight(1);
  text('PUSH',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,50,25);
  fill(0);
  strokeWeight(1);
  text('POP',510,165);
}

function draw(){
  background(255);
  strokeWeight(2);
  fill(255);
  rect(500,100,50,25);
  fill(0);
  strokeWeight(1);
  text('PUSH',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,50,25);
  fill(0);
  strokeWeight(1);
  text('POP',510,165);
  line(95,100,95,530);
  line(95,530,130,530);
  line(130,530,130,100);
  for(i=0;i<teststack.length;i++){
    noFill();
    square(100,500-cury,25);
    stroke(0);
    strokeWeight(1);
    text(teststack[i],104,504-cury,25);;
    cury+=30;
  }
  i=0;
  cury=0;
}

function pushElement() {
  let n = prompt('Enter a number: ','');
  teststack.push(n);
}

function popElement(){
  teststack.pop();
}

function mouseClicked(){
  if(mouseX>500 && mouseX<550 && mouseY>100 && mouseY<125){
    pushElement();
  }
  if(mouseX>500 && mouseX<550 && mouseY>150 && mouseY<175){
    popElement();
  }
}