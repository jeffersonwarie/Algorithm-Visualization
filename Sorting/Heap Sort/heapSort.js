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
	x = 1;
}
let y = 125;
let array_length = len;
j = Math.floor(array_length / 2);

function swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heap_root(input, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let max = index;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != index) {
        swap(input, index, max);
        heap_root(input, max);
    }
}

function setup(){
	createCanvas(1366,768);
}

function draw(){
	background(0);
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
	
    if(k==0){
        heap_root(testarray, j);
        j=j-1;
        if(j<0){
          k=1;
          j = len-1;
        }
    }
  
    if(k==1){
        swap(testarray, 0, j);
        array_length--;
        heap_root(testarray, 0);
        j=j-1;
        if(j<=0){
          k=2;
        }
    }
}