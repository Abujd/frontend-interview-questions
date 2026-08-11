import { LinkedList, Node } from "./LinkedListBasics.js";

const ll = new LinkedList();

ll.addNodeAtStart(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(4);
ll.addNodeAtEnd(5);


function getkthNode(curr, k){
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}

function reverseKGroup(head, k){
    let dummy = new Node(0);
    dummy.next = head;
    let groupPrev = dummy;

    while(true){
    let kthNode = getkthNode(groupPrev, k);

    if(kthNode === null)
        break;

    let groupNext = kthNode.next;
    let prev = groupNext;
    let curr = groupPrev.next;

    for (let i = 0; i < k; i++) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let temp = groupPrev.next;
    groupPrev.next = kthNode;
    groupPrev = temp;

}
return dummy.next;


}


let k = 2;
ll.head = reverseKGroup(ll.head, k);

ll.viewAllNodes();