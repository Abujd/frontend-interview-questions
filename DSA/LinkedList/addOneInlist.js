import { LinkedList, Node } from "./LinkedListBasics.js";

const ll = new LinkedList();

function reverse(head){
    let prev = null;
    let current = head;
    let nextNode = head.next;

    while(current){
        nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
}
return prev;
}

function addOneInTheList(head, number){
    head = reverse(head);
    
    let sum = 0, carry = number;
    let current = head;
    while(current && carry > 0){
        sum = current.data + carry;
        carry  = Math.floor(sum / 10);
        let x  = sum % 10;
        current.data =  x; 
        if(current.next === null && carry > 0){
            current.next = new Node(x)
        }
        current = current.next;
        
    } 
    head = reverse(head);
    return head;

}

ll.addNodeAtStart(2);
ll.addNodeAtEnd(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(4);
 //oddEvenList(ll.head);

ll.head = addOneInTheList(ll.head, 50000);
ll.viewAllNodes(); 