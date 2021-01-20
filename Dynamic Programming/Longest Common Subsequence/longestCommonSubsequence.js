let solutionmatrix = [];

function printSolution(solution, wordX, m, n) {
  let a = m;
  let b = n;
  let x = solution[a][b];
  let answer = '';
  while (x !== '0') {
    if (solution[a][b] === 'diagonal') {
      answer = wordX[a - 1] + answer;
      a--;
      b--;
    } else if (solution[a][b] === 'left') {
      b--;
    } else if (solution[a][b] === 'top') {
      a--;
    }
    x = solution[a][b];
  }
  solutionmatrix = solution;
  return answer;
}

function lcs(wordX, wordY) {
  const m = wordX.length;
  const n = wordY.length;
  const l = [];
  const solution = [];
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
      solution[i][j] = '0';
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
        solution[i][j] = 'diagonal';
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b; // max(a,b)
        solution[i][j] = l[i][j] === l[i - 1][j] ? 'top' : 'left';
      }
    }
    // console.log(l[i].join());
    // console.log(solution[i].join());
  }
  return printSolution(solution, wordX, m, n);
}

let wordX = prompt('Enter first word: ','');
let wordY = prompt('Enter second word: ','')

//Default input
//const wordX = 'acbaed';
//const wordY = 'abcadf';

let reslcs = lcs(wordX,wordY);
console.log('Longest common subsequence: ', reslcs);

let xoffset=0;
let yoffset=0;

function setup() {
  createCanvas(800,600);
  stroke(0);
  text('First word: '+wordX,100,100);
  text('Second word: '+wordY,100,150);
  text('Longest common subsequence: '+reslcs,100,200);
}

function draw() {
  background(255);
  stroke(0);
  text('First word: '+wordX,100,100);
  text('Second word: '+wordY,100,150);
  text('Longest common subsequence: '+reslcs,100,200);
  text('Solution matrix: ',100,250);
  for(let i=0;i<solutionmatrix.length;i++){
    for(let j=0;j<solutionmatrix[i].length;j++){
      text(solutionmatrix[i][j],100+xoffset,300+yoffset);
      xoffset+=50;
    }
    xoffset=0;
    yoffset+=50;
  }
  xoffset=0;
  yoffset=0;
}