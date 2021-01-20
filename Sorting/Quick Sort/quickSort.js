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
let stack = [];
let low = 0;
let high = len - 1;
stack.push([low,high]);

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
	
	if(stack.length>0){
        let range = stack.pop();
        low = range[0];
        high = range[1];
        if(low<high){
            let pivot = Math.floor((low+high)/2);
            stack.push([low, pivot]);
            stack.push([pivot+1, high]);
            while(low<high){
                while(low<pivot && testarray[low] <= testarray[pivot]){
                    low++;
                }
                while(high>pivot && testarray[high] > testarray[pivot]){
                    high--;
                }
                if(low<high){
                    let tmp = testarray[low]
                    testarray[low] = testarray[high]
                    testarray[high] = tmp
                }
            }   
        } 
    }
}