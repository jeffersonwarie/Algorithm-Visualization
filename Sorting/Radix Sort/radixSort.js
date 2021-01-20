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
let x = 513;
if(testarray.length>20){
	x = 1;
}
let y = 125;
const maxNum = Math.max(...testarray) * 10;
let divisor = 10;

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
	
    if(divisor<maxNum){
	    let buckets = [...Array(10)].map(() => []);
        for (let num of testarray) {
			frameRate(1);
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }
        testarray = [].concat.apply([], buckets);
        divisor *= 10;
    }
}