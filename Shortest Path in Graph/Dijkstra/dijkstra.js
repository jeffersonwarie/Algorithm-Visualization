let shortestDistanceNode = (distances, visited) => {
  // create a default value for shortest
	let shortest = null;
	
  	// for each node in the distances object
	for (let node in distances) {
    	// if no node has been assigned to shortest yet
  		// or if the current node's distance is smaller than the current shortest
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
        	
	  	// and if the current node is in the unvisited set
		if (currentIsShortest && !visited.includes(node)) {
            // update shortest to be the current node
			shortest = node;
		}
	}
	return shortest;
};

let findShortestPath = (graph, startNode, endNode) => {
 
 // track distances from the start node using a hash object
   let distances = {};
 distances[endNode] = "Infinity";
 distances = Object.assign(distances, graph[startNode]);
// track paths using a hash object
 let parents = { endNode: null };
 for (let child in graph[startNode]) {
  parents[child] = startNode;
 }

 // collect visited nodes
   let visited = [];
// find the nearest node
   let node = shortestDistanceNode(distances, visited);
 
 // for that node:
 while (node) {
 // find its distance from the start node & its child nodes
  let distance = distances[node];
  let children = graph[node]; 
      
 // for each of those child nodes:
      for (let child in children) {
  
  // make sure each child node is not the start node
        if (String(child) === String(startNode)) {
          continue;
       } else {
          // save the distance from the start node to the child node
          let newdistance = distance + children[child];
// if there's no recorded distance from the start node to the child node in the distances object
// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
          if (!distances[child] || distances[child] > newdistance) {
// save the distance to the object
     distances[child] = newdistance;
// record the path
     parents[child] = node;
    } 
         }
       }  
      // move the current node to the visited set
      visited.push(node);
// move to the nearest neighbor node
      node = shortestDistanceNode(distances, visited);
    }
  
 // using the stored paths from start node to end node
 // record the shortest path
 let shortestPath = [endNode];
 let parent = parents[endNode];
 while (parent) {
  shortestPath.push(parent);
  parent = parents[parent];
 }
 shortestPath.reverse();
  
 //this is the shortest path
 let results = {
  distance: distances[endNode],
  path: shortestPath,
 };
 // return the shortest path & the end node's distance from the start node
   return results;
};

let graph = {
	start: { A: 5, B: 2 },
	A: { start: 1, C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, finish: 3 },
	D: { finish: 1 },
	finish: {},
};

let nodearray = ["start","A","B","C","D","finish"];
let nodecoords = [];
for(let i=0;i<nodearray.length;i++){
  let xcoord = Math.floor(Math.random() * (700 - 100 + 1) ) + 100;
  let ycoord = Math.floor(Math.random() * (500 - 100 + 1) ) + 100;
  nodecoords.push([xcoord,ycoord]);
}

let answerpath = findShortestPath(graph, "start", "finish");
console.log(answerpath);
let pathway = answerpath.path;
console.log(pathway);

let visitedcoordinates = [];
for(let i=0;i<pathway.length;i++){
  for(let j=0;j<nodearray.length;j++){
    if(pathway[i]==nodearray[j]){
      visitedcoordinates.push([nodecoords[j][0],nodecoords[j][1]]);
    }
  }
}

let pathwayindex = 1;
let xoffset = 0;

function setup() {
  createCanvas(800,600);
  background(0);
  for(let i=0;i<nodearray.length;i++){
    noFill();
    stroke(255);
    circle(nodecoords[i][0],nodecoords[i][1],30);
    stroke(255);
    text(nodearray[i],nodecoords[i][0],nodecoords[i][1]);
  }
  for(let i=0;i<nodearray.length;i++){
    let temparr1 = Object.keys(graph[nodearray[i]]);
    let temparr2 = Object.values(graph[nodearray[i]]);
    let temparr3 = [];
    for(let j=0;j<temparr2.length;j++){
      temparr3.push([temparr1[j],temparr2[j]]);
    }
    for(let j=0;j<nodearray.length;j++){
      for(let k=0;k<temparr3.length;k++){
        if(temparr3[k][0]==nodearray[j]){
          stroke(255);
          line(nodecoords[i][0],nodecoords[i][1],nodecoords[j][0],nodecoords[j][1]);
          stroke(255);
          text(temparr3[0][1],(nodecoords[i][0]+nodecoords[j][0])/2,(nodecoords[i][1]+nodecoords[j][1])/2);
        }
      }
    }
  }
}

function draw() {
  background(0);
  frameRate(1);
  strokeWeight(1);
  for(let i=0;i<nodearray.length;i++){
    noFill();
    stroke(255);
    circle(nodecoords[i][0],nodecoords[i][1],30);
    stroke(255);
    text(nodearray[i],nodecoords[i][0],nodecoords[i][1]);
  }
  text('Shortest path is ',100,550);
  for(let i=0;i<pathway.length;i++){
    if(i==pathway.length-1){
	  text(pathway[i],200+xoffset,550);
	}
	else{
	  text(pathway[i]+'->',200+xoffset,550);
	}
	xoffset += 50;
  }
  xoffset = 0;
  for(let i=0;i<nodearray.length;i++){
    let temparr1 = Object.keys(graph[nodearray[i]]);
    let temparr2 = Object.values(graph[nodearray[i]]);
    let temparr3 = [];
    for(let j=0;j<temparr2.length;j++){
      temparr3.push([temparr1[j],temparr2[j]]);
    }
    for(let j=0;j<nodearray.length;j++){
      for(let k=0;k<temparr3.length;k++){
        if(temparr3[k][0]==nodearray[j]){
          stroke(255);
          line(nodecoords[i][0],nodecoords[i][1],nodecoords[j][0],nodecoords[j][1]);
          stroke(255);
          text(temparr3[k][1],(nodecoords[i][0]+nodecoords[j][0])/2,(nodecoords[i][1]+nodecoords[j][1])/2);
        }
      }
    }
  }
  for(let i=0;i<pathwayindex;i++){
    if(i<pathway.length-1){
      strokeWeight(4);
      stroke(0,255,0);
      line(visitedcoordinates[i][0],visitedcoordinates[i][1],visitedcoordinates[i+1][0],visitedcoordinates[i+1][1]);
    }
  }
  if(pathwayindex<pathway.length){
    pathwayindex+=1;
  }
}