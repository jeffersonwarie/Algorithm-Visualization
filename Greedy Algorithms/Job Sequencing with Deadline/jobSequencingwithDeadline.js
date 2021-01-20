function printJobScheduling(arr, t){ 
    
  let n = arr.length;
  
  // Sort all jobs according to  
  // decreasing order of profit 
  for(let i=0;i<n;i++){
    for(let j=0;j<(n-1-i);j++){
      if(arr[j][2] < arr[j+1][2]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  // To keep track of free time slots 
  let result = [];
  for(let i=0;i<t;i++){
    result.push(0);
  }
  
  // To store result (Sequence of jobs) 
  let job = [];
  for(let i=0;i<t;i++){
    job.push(-1);
  }
  
  // Iterate through all given jobs 
    for(let i=0;i<arr.length;i++){
  
    // Find a free slot for this job  
    // (Note that we start from the  
    // last possible slot) 
      for(let j=Math.min(t-1, arr[i][1]-1);j>-1;j--){
              
        // Free slot found 
        if(result[j]==0){ 
          result[j] = 1;
          job[j] = arr[i][0];
          break;
        }
      }
    }
  
    // print the sequence 
    console.log(job)
    return job;
}

let noofjobs = prompt('Enter number of jobs: ','');
let arr = [];

for(let i=0;i<noofjobs;i++){
  let jobid = prompt('Enter job ID: ','');
  let deadline = prompt('Enter deadline: ','');
  let profit = prompt('Enter profit: ','');
  arr.push([jobid,deadline,profit]);
}

let finaldeadline = prompt('Enter final deadline: ','');
// Default input 
/*let arr = [['a', 2, 100], // Job Array 
       ['b', 1, 19], 
       ['c', 2, 27], 
       ['d', 1, 25], 
       ['e', 3, 15]]*/

console.log("Following is maximum profit sequence of jobs");
let result = printJobScheduling(arr,finaldeadline);
let xoffset = 0;
let yoffset = 0;

function setup(){
  createCanvas(800,600);
}

function draw(){
  background(255);
  stroke(0);
  text('Input: JobID Deadline Profit',100,100);
  yoffset += 25;
  for(let i=0;i<arr.length;i++){
    text(arr[i][0],150,100+yoffset);
    text(arr[i][1],175,100+yoffset);
    text(arr[i][2],225,100+yoffset);
    yoffset += 25;
  }
  yoffset = 0;
  text('Following is maximum profit sequence of jobs: '+result,100,500);
}