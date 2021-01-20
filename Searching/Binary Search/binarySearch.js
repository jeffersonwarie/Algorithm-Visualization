let testarray = [10,20,30,40,50,60,70,80,90,100];
let xoffset = 0;
let resultindex = -1;
let resindarr = [];
let resindmov = 0;

let binarySearch = function (arr, x, start, end) {  
    if(start > end){
      return -1;
    }

    let mid=Math.floor((start + end)/2);
    resindarr.push(mid);	

    if (arr[mid]==x){
      return mid;
    }
    
    if(arr[mid]>x){ 
        return binarySearch(arr, x, start, mid-1);
    } 
    else{
        return binarySearch(arr, x, mid+1, end); 
    }
} 

function setup(){
  createCanvas(800,600);
  strokeWeight(2);
  fill(255);
  rect(500,100,50,25);
  fill(0);
  text('PUSH',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,70,25);
  fill(0);
  text('POP',510,165);
  strokeWeight(2);
  fill(255);
  rect(500,200,70,25);
  fill(0);
  text('SEARCH',510,165);
  for(i=0;i<testarray.length;i++){
    noFill();
    rect(50+xoffset,300,50,25);
    fill(0);
    text(testarray[i],55+xoffset,316);
    xoffset += 50;
  }
  xoffset = 0;
}

function draw(){
  background(255);
  frameRate(1);
  strokeWeight(2);
  fill(255);
  rect(500,100,50,25);
  fill(0);
  text('PUSH',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,50,25);
  fill(0);
  text('POP',510,165);
  fill(255);
  rect(500,200,70,25);
  fill(0);
  text('SEARCH',510,216);
  for(i=0;i<testarray.length;i++){
    noFill();
    rect(50+xoffset,300,50,25);
    fill(0);
    text(testarray[i],55+xoffset,316);
    if(i==resindarr[resindmov] && resultindex!=-1){
	  if(i==resultindex){
        fill(0,255,0);
	  }
	  else{
		fill(255,0,0);
	  }
      rect(50+xoffset,300,50,25);
      fill(0);
      text(testarray[i],55+xoffset,316);
    }
    xoffset += 50;
  }
  xoffset = 0;
  if(resindmov<resindarr.length-1){
	resindmov++;
  }
}

function mouseClicked(){
  if(mouseX>500 && mouseX<550 && mouseY>100 && mouseY<125){
    let elem = prompt("Please enter element to add","");
    testarray.push(elem);
  }
  if(mouseX>500 && mouseX<550 && mouseY>150 && mouseY<175){
    testarray.pop();
  }
  if(mouseX>500 && mouseX<570 && mouseY>200 && mouseY<255){
    let searchelem = prompt("Please enter element to search","");
	resindarr = [];
	resindmov = 0;
    resultindex = binarySearch(testarray,searchelem,0,testarray.length-1);
  }
}