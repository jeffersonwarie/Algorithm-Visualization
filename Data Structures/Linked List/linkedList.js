class Node { 
  constructor(element) { 
    this.element = element; 
    this.next = null;
  } 
}

class LinkedList { 
  constructor() { 
    this.head = null; 
    this.size = 0; 
  } 
  
  add(element){
    let node = new Node(element);
    let current; 
    
    if (this.head == null){
      this.head = node; 
    }
    else{
      current = this.head; 

      while(current.next){ 
            current = current.next; 
      } 

      current.next = node; 
    } 
    this.size++; 
  }
  
  insertAt(element, index){ 
    if(index > 0 && index > this.size){ 
      return false;
    }
    else{
      let node = new Node(element); 
      let curr, prev; 
      
      curr = this.head; 

      if (index == 0) { 
            node.next = this.head; 
            this.head = node; 
      }
      else {
        curr = this.head;
        var it = 0;
        
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        } 
  
        node.next = curr; 
        prev.next = node; 
      } 
      this.size++; 
    } 
  }
  
  removeFrom(index){ 
    if(index > 0 && index > this.size){
      return -1;
    }
    else{
      let curr, prev, it = 0;
      curr = this.head;
      prev = curr; 
  

      if (index == 0) {
        this.head = curr.next; 
      }
      else{

        while (it < index) { 
          it++; 
          prev = curr; 
          curr = curr.next; 
        } 
  

        prev.next = curr.next; 
      } 
      this.size--; 
  

      return curr.element; 
    }
  }
  
  removeElement(element){ 
    let current = this.head; 
    let prev = null; 

    while(current != null){
      if(current.element == element){
        if (prev == null) { 
          this.head = current.next;
        } 
        else{
          prev.next = current.next; 
        }
        this.size--; 
        return current.element; 
      } 
      prev = current; 
      current = current.next; 
    } 
    return -1; 
  }
  
  indexOf(element){ 
    let count = 0; 
    let current = this.head; 

    while(current != null){
      if(current.element == element){
        return count; 
      }
      count++; 
      current = current.next; 
    } 
    
    return -1;
  } 
  
  isEmpty(){ 
    return this.size == 0;
  }
  
  size_of_list(){ 
    console.log(this.size);
  } 
  
  printList(){ 
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
      str += curr.element + " "; 
      curr = curr.next; 
    } 
    console.log(str);
  }
  
  copier(arr){
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
      arr.push(curr.element);
      curr = curr.next; 
    }
  }
}

let displayarr = [];
let i = 0;
let xoffset = 0;
let testll = new LinkedList();
testll.add(10);
testll.add(20);
testll.add(30);
testll.add(40);
testll.add(50);
testll.copier(displayarr);
let resultindex = -1;


function setup() {
  createCanvas(800,600);
  background(255);
  strokeWeight(2);
  fill(255);
  rect(500,50,70,25);
  fill(0);
  text('SEARCH',510,165);
  strokeWeight(2);
  fill(255);
  rect(500,100,50,25);
  fill(0);
  text('ADD',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,70,25);
  fill(0);
  text('REMOVE',510,165);
  noFill();
  rect(50+xoffset,200,50,25);
  fill(0);
  text('head',55+xoffset,216);
  line(100+xoffset,213,130+xoffset,213);
  xoffset+=80;
  for(i=0;i<displayarr.length;i++){
    noFill();
    if(i==resultindex){
       fill(0,255,0);
    }
    rect(50+xoffset,200,50,25);
    fill(0);
    text(displayarr[i],55+xoffset,216);
    line(100+xoffset,213,130+xoffset,213);
    xoffset += 80;
  }
  noFill();
  rect(50+xoffset,200,50,25);
  fill(0);
  text('tail',55+xoffset,216);
  displayarr = [];
  testll.copier(displayarr);
  xoffset = 0;
}

function draw() {
  background(255);
  strokeWeight(2);
  fill(255);
  rect(500,50,70,25);
  fill(0);
  text('SEARCH',510,65);
  strokeWeight(2);
  fill(255);
  rect(500,100,50,25);
  fill(0);
  text('ADD',510,115);
  strokeWeight(2);
  fill(255);
  rect(500,150,70,25);
  fill(0);
  text('REMOVE',510,165);
  noFill();
  rect(50+xoffset,200,50,25);
  fill(0);
  text('head',55+xoffset,216);
  line(100+xoffset,213,130+xoffset,213);
  xoffset+=80;
  for(i=0;i<displayarr.length;i++){
    noFill();
    if(i==resultindex){
       fill(0,255,0);
    }
    rect(50+xoffset,200,50,25);
    fill(0);
    text(displayarr[i],55+xoffset,216);
    line(100+xoffset,213,130+xoffset,213);
    xoffset += 80;
  }
  noFill();
  rect(50+xoffset,200,50,25);
  fill(0);
  text('tail',55+xoffset,216);
  displayarr = [];
  testll.copier(displayarr);
  xoffset = 0;
}

function mouseClicked(){
  if(mouseX>500 && mouseX<575 && mouseY>50 && mouseY<75){
    let searchelem = prompt("Please enter element to search","");
    for(let i=0;i<displayarr.length;i++){
      if(displayarr[i]==searchelem){
        resultindex = i;
      }
    }
  }
  if(mouseX>500 && mouseX<575 && mouseY>100 && mouseY<125){
    let elem1 = prompt("Please enter element to add","");
    testll.add(elem1);
  }
  if(mouseX>500 && mouseX<575 && mouseY>150 && mouseY<175){
    let elem2 = prompt("Please enter element to add","");
    testll.removeElement(elem2);
  }
}