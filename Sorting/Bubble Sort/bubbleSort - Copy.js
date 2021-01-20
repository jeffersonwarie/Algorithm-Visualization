let len = prompt("Please enter array length", "");
let testarray = [];
let number = 0;
let i = 0;
for(i=0;i<len;i++){
	number = prompt("Please enter a number", "");
	testarray.push(number);
}
i=0;
let j = 0;
let k = 0;
let x = 0;
let y = 1;
let temp = 0;
let stop = len-j;

function swap(arr, first_Index, second_Index){
    let temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function setup(){
	createCanvas(800,600);
}

function draw(){
	background(0,255,0);
	frameRate(1);
	
	for(i=0;i<testarray.length;i++){
		strokeWeight(2);
		fill(255,255,0);
		rect(x,y,10,testarray[i]);
		x = x+10;
	}
	i = 0;
	x = 1;
	
	if(j<len){
		if(testarray[k]>testarray[k+1]){
			swap(testarray,k,k+1);
		}
	    k = k+1;
	    if(k == stop){
		    k = 0;
		    j = j+1;
		    stop = len-j;
	    }
	}
}