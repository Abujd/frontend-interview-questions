import { LinkedList, Node } from "./LinkedListBasics.js";

const listA = new LinkedList();
const listB = new LinkedList();

// List A
listA.addNodeAtEnd(4);
listA.addNodeAtEnd(1);

// List B
listB.addNodeAtEnd(5);
listB.addNodeAtEnd(6);
listB.addNodeAtEnd(1);

// Create intersection nodespp                                                                                                                                                                                
const intersection1 = new Node(8);
const intersection2 = new Node(4);
const intersection3 = new Node(5);

intersection1.next = intersection2;
intersection2.next = intersection3;

// Attach both lists to the SAME intersection
let currentA = listA.head;
while (currentA.next) {
    currentA = currentA.next;
}
currentA.next = intersection1;

let currentB = listB.head;
while (currentB.next) {
    currentB = currentB.next;
}
currentB.next = intersection1;


// Your logic goes here
var getIntersectionNode = function(headA, headB) {

    let map = new Set();
    let current = headA;

    while(current){
       map.add(current);
        current = current.next;
    }
    let current2 = headB;

    while(current2){

        if(map.has(current2))
            return current2;
        
        current2 = current2.next;
    }

    return false;
};


function viewAllNodes(head) {
    let current = head;
    let result = "";

    while (current) {
        result += current.data;

        if (current.next) {
            result += " -> ";
        }

        current = current.next;
    }

    console.log(result);
}

viewAllNodes(listA.head);
viewAllNodes(listB.head);
// Test
const result = getIntersectionNode(listA.head, listB.head);


console.log("Intersection Node:", result);
console.log("Intersection Value:", result ? result.data : null);