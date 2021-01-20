var tree;	//global tree
var render; //global renderer for display
let inorderarr = [];
let preorderarr = [];
let postorderarr = [];
let xoffset = 0;

//Create the initial tree and draw the background
function setup(){
    createCanvas(800,600);
    background(255);
    textAlign(CENTER);
    noLoop();	//do not loop draw function 
    
    tree = new Tree();
    
    //populate tree
    for(var i = 0; i < 10; i++){
        tree.addValue(int(random() * 10));
    }
  
    tree.inorder(tree.root);
    tree.preorder(tree.root);
    tree.postorder(tree.root);
    fill(0);
    stroke(0);
    text('Inorder traversal: ',100,400);
    for(let i=0;i<inorderarr.length;i++){
      text(inorderarr[i],170+xoffset,400);
      xoffset+=25;
    }
    xoffset=0
    text('Preorder traversal: ',100,450);
    for(let i=0;i<preorderarr.length;i++){
      text(preorderarr[i],170+xoffset,450);
      xoffset+=25;
    }
    xoffset=0
    text('Postorder traversal: ',100,500);
    for(let i=0;i<postorderarr.length;i++){
      text(postorderarr[i],170+xoffset,500);
      xoffset+=25;
    }
    xoffset=0;
    
    render = new Renderer(40);
}

function draw(){
    //create levels
    render.createLevels(treeHeight(tree.root));
    
    //render the tree
    render.traverseByRoot(tree.root, width / 2, 25);
    
    //log in-order tree
    console.log(tree);
}

function mousePressed() {
    // if(){
    // }
}

//basic node 
function Node(input) {
    this.data = input;	//data held
    this.depth = 0;		//default height of node
    this.left = null;
    this.right = null;
}

//basc tree
function Tree(){
    this.root = null;
}

//determine how 'tall' the tree is
function treeHeight(node) {
   if(!node) {
       return 0;
   }
   var leftHeight = treeHeight(node.left);
   var rightHeight = treeHeight(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}

//determine the 'depth / level' of a node in the tree 
function updateDepth (node, nodeHeight){
    if (node != null){
        node.depth = nodeHeight;
        updateDepth(node.left, nodeHeight + 1); // left sub-tree
        updateDepth(node.right, nodeHeight + 1); // right sub-tree
    }
}

//creates a new node with a given value
Tree.prototype.addValue = function(val) {
   var newNode = new Node(val); 

   if(this.root == null){					//if there is no root, create one
      this.root = new Node(val, height / 2, width / 2);
      return;
   } else {									 //otherwise 
        this.insertNode(this.root, newNode); // find the correct position in the   
   }    								     // tree and add the node
}

//creates a new node with a value from the user
Tree.prototype.addUserValue = function(val) {
	if(val === ""){
        return;
    }
   var newNode = new Node(val); 

   if(this.search(this.root, val)){ //do not add node already on tree
       return;
	}
   if(this.root == null){					//if there is no root, create one
      this.root = new Node(val, height / 2, width / 2);
      return;
   } else {									 //otherwise 
        this.insertNode(this.root, newNode); // find the correct position in the   
   }    								     // tree and add the node
	redraw();
}

//inserts a node when given a root and a new node
Tree.prototype.insertNode = function(node, newNode) {
    
    //if the new data is the same as the node
    //don't add the data
    if(newNode.data === node.data) { 
        return;
    }
    // if the data is less than the node 
    // data move left of the tree  
    if(newNode.data < node.data) { 
        // if left is null insert node here 
        if(node.left === null) {
            node.left = newNode;
            updateDepth(node, node.depth);
            updateDepth(newNode, newNode.depth);
        } else {
            // if left is not null recurr until  
            // null is found 
            this.insertNode(node.left, newNode);
        }  
    }

    // if the data is more than the node 
    // data move right of the tree  
    else { 
        // if right is null insert node here 
        if(node.right === null) {
            node.right = newNode; 
            updateDepth(node, node.depth);
            updateDepth(newNode, newNode.depth);
        } else {
            // if right is not null recurr until  
            // null is found 
            this.insertNode(node.right,newNode); 
        }
    } 
}

Tree.prototype.balanceTree = function(node) {
    var values = [];
    
    //take all nodes from the tree and store them in an array
    if(node !== null) { 
        this.balanceTree(node.left); //go left
        values.push(node.data);
        this.balanceTree(node.right); //go right
    }
    
    //create a new tree with the array, using the midpoint 
    //of the data as a root
    ballancedTree = new Tree();
    ballancedTree.addValue(values[values.length / 2]);
    for(var i = 0; i <= values.length; i++){
        ballancedTree.addValue(values[i]);
    }
    
    //assign the new tree to the old
    tree = ballancedTree;
    //redraw the updated tree
    redraw();
}

// search for a node with given data 
Tree.prototype.search = function(node, data) { 
   // if trees is empty return null 
    if(node === null) {
        return null; 
    }
  
    // if data is less than node's data 
    // move left 
    else if(data < node.data) {
        return this.search(node.left, data); 
    }
  
    // if data is less than node's data 
    // move left 
    else if(data > node.data) {
        return this.search(node.right, data); 
    }
  
    // if data is equal to the node data  
    // return node 
    else {
    	return node; 
    }
} 

// Performs inorder traversal of a tree 
Tree.prototype.inorder = function(node) { 
    if(node !== null) { 
        this.inorder(node.left); //go left
        console.log(node.data); //do thing
        inorderarr.push(node.data);
        this.inorder(node.right); //go right
    } 
}

// Performs preorder traversal of a tree 
Tree.prototype.preorder = function(node) { 
    if(node !== null) {
        console.log(node.data); //do thing
        preorderarr.push(node.data);
        this.preorder(node.left); //go left
        this.preorder(node.right); //go right
    }
}

// Performs postorder traversal of a tree 
Tree.prototype.postorder = function(node) { 
    if(node !== null) { 
        this.postorder(node.left); //go left
        this.postorder(node.right); //go right
        console.log(node.data); //do thing
        postorderarr.push(node.data);
    } 
}


//the basic renderer
function Renderer(size){
    this.size = size;    
    this.nodeDistance = width / 4;
    this.color = 255;
}

//display rectangles of colors for each level of the tree
Renderer.prototype.createLevels = function(treeheight){
    
    //generate random colors within ranges, so that the top is
    //generally lighter and distinct from the bottom 
    var from = color(0,0,0); //top
	var to = color(0,0,0); //bottom
    var myArray = [from];
    
    var percent = 1 / treeheight;
    
    //lerp color transitions between colors
    for(var i = 0; i <= treeheight; i++){
        append(myArray, lerpColor(from, to, percent));
        percent = percent + (percent *.45);
    }
    append(myArray, to);
    
    var x = 0;
    var y = 0;
    
    //actually draw the levels
    for(var i = 0; i <= treeheight; i++){
        noStroke();
        fill(myArray[i])
        rect(x, y, width, 50);
        y = y + 50;
    }

}

//traverse the tree in order to draw the nodes
Renderer.prototype.traverseByRoot = function(node, x, y){
    if(node !== null){
        this.drawTree(node, x, y);
        this.traverseByRoot(node.left);
        this.traverseByRoot(node.right);
    }
}

Renderer.prototype.drawTree = function(node, x, y){
    if(node !== null){
        fill(this.color);
    	ellipse(x, y, this.size);
        stroke(this.color);
        
        line(x, y, x + 50, y + 40);
        line(x, y, x - 50, y + 40);
        
        fill(0);
        text(node.data, x, y+4);
        this.traverseByRoot(node.left, x - 50, y + 50);
        this.traverseByRoot(node.right, x + 50, y + 50);
    }
}