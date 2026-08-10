import { LinkedList, Node } from "./LinkedListBasics.js";

const ll = new LinkedList();


function oddEvenList(head){
  
const tempList = new LinkedList();
let current = head;
while(current){
  tempList.addNodeAtEnd(current.data);
  current = current.next ? current.next.next : null;
}
current = head.next;
    while(current){
        tempList.addNodeAtEnd(current.data);
        current = current.next ? current.next.next : null;
    }
current = head;
let newCurrent = tempList.head;
    while(newCurrent && current){
        current.data = newCurrent.data;
        current = current.next;
        newCurrent = newCurrent.next;
    }
}


function oddEvenListOptimised(head){
    let oddNode = head;
    let evenNode = head.next;
    let evenHead = evenNode;
    
    while (evenNode && evenNode.next) {
        oddNode.next = evenNode.next;
        oddNode = oddNode.next;
    
        evenNode.next = oddNode.next;
        evenNode = evenNode.next;
    }
        oddNode.next = evenHead;
}

ll.addNodeAtStart(0);
ll.addNodeAtEnd(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(4);
 //oddEvenList(ll.head);

oddEvenListOptimised(ll.head);


ll.viewAllNodes();
