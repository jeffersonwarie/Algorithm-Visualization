let len = prompt("Please enter array length", "");
let testarray = [];
let number = 0;
let i = 0;
for(i=0;i<len;i++){
	if(i==0){
	    number = prompt("Please enter 1st number", "");
	    testarray.push(number);
	}
	else if(i==1){
		number = prompt("Please enter 2nd number", "");
	    testarray.push(number);
	}
	else if(i==2){
		number = prompt("Please enter 3rd number", "");
	    testarray.push(number);
	}
	else{
		number = prompt("Please enter "+(i+1)+"th number", "");
	    testarray.push(number);
	}
}
i=0;
let j = 0;
let k = 0;
let x = 513;
if(testarray.length>20){
	x = 0;
}
let y = 125;
let temp = 0;
let stop = len-j;

function swap(arr, first_Index, second_Index){
    let temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function setup(){
	createCanvas(1366,768);
}

function draw(){
	background(0);
	frameRate(1);
	for(i=0;i<testarray.length;i++){
		strokeWeight(2);
		fill(255);
		rect(x,y,20,2*testarray[i]);
		text(testarray[i],x,y-12);
		x = x+35;
	}
	i = 0;
	x = 513;
	if(testarray.length>20){
		x = 1;
    }
	
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