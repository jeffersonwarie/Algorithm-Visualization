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
let sorted = testarray.slice();
let n = sorted.length;
let buffer = new Array(n);
let size = 1;
let leftStart = 0;
let left, right, leftLimit, rightLimit;
let temp;

function setup(){
	createCanvas(1366,768);
}

function draw(){
	background(0);
	frameRate(1);
	for(i=0;i<sorted.length;i++){
		strokeWeight(2);
		fill(255);
		rect(x,y,20,2*sorted[i]);
		text(sorted[i],x,y-12);
		x = x+35;
	}
	i = 0;
	x = 513;
	if(testarray.length>20){
		x = 1;
    }
	
      if(size<n){
      for (leftStart = 0; leftStart < n; leftStart += 2*size) {
            left = leftStart;
            right = Math.min(left + size, n);
            leftLimit = right;
            rightLimit = Math.min(right + size, n);
            j = left;
        while (left < leftLimit && right < rightLimit) {
          if (sorted[left] <= sorted[right]) {
            buffer[j++] = sorted[left++];
          } else {
            buffer[j++] = sorted[right++];
          }
        }
        while (left < leftLimit) {
          buffer[j++] = sorted[left++];
        }
        while (right < rightLimit) {
          buffer[j++] = sorted[right++];
        }
      }
      temp = sorted,
      sorted = buffer,
      buffer = temp;

      size*=2;
  }
}