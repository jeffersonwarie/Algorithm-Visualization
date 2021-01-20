function findValues(n, capacity, kS) {
  let i = n;
  let k = capacity;
  // console.log('Items that are part of the solution:');
  while (i > 0 && k > 0) {
    if (kS[i][k] !== kS[i - 1][k]) {
      // console.log(
      //  item ' + i + ' can be part of solution w,v: ' + weights[i - 1] + ',' + values[i - 1]
      //  );
      i--;
      k -= kS[i][k];
    } else {
      i--;
    }
  }
}

function knapSackDynamic(capacity, weights, profits, n) {
  const kS = [];
  for (let i = 0; i <= n; i++) {
    kS[i] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        const a = profits[i - 1] + kS[i - 1][w - weights[i - 1]];
        const b = kS[i - 1][w];
        kS[i][w] = a > b ? a : b; // max(a,b)
        // console.log(a + ' can be part of the solution');
      } else {
        kS[i][w] = kS[i - 1][w];
      }
    }
    // console.log(kS[i].join());
  }
  // extra algorithm to find the items that are part of the solution
  findValues(n, capacity, kS);
  return kS[n][capacity];
}

const objects = [0,1,2];
const profits = [3,4,5];
const weights = [2,3,4];
const n = objects.length;
const capacity = 5;
let maxprofit = 0;
let xoffset = 0;

maxprofit = knapSackDynamic(capacity, weights, profits,n);
console.log(knapSackDynamic(capacity, weights, profits,n));

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255);
  stroke(0);
  text('Objects',100,100);
  text('Profits',100,125);
  text('Weights',100,150);
  for(let i=0;i<objects.length;i++){
    noFill();
    rect(150+xoffset,85,50,25);
    text(objects[i],170+xoffset,100);
    rect(150+xoffset,110,50,25);
    text(profits[i],170+xoffset,125);
    rect(150+xoffset,135,50,25);
    text(weights[i],170+xoffset,150);
    xoffset += 50;
  }
  text('Max profit: ',100,175);
  text(maxprofit,170,175)
  xoffset = 0;
}