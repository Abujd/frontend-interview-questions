import { LinkedList, Node } from "./LinkedListBasics.js";

const ll = new LinkedList();

function findMiddle(head){
    let slow = head, fast = head.next;
    if(head === null)
        return null;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function mergeList(leftHead, rightHead, head){
    let dummy = new Node(0);
    let current = dummy;

    while(leftHead !== null && rightHead !== null){
        if(leftHead.data <= rightHead.data){
            current.next = leftHead;
            leftHead = leftHead.next;

        }else{
            current.next = rightHead;
            rightHead = rightHead.next;  
        }
        current = current.next;
    }

    if(leftHead !==  null){
        current.next = leftHead;
    }

    if(rightHead !== null){
        current.next = rightHead;
    }
     return dummy.next;
}


function mergeSortOnLL(head){
    if (head === null || head.next === null) {
        return head;
    }

    let middle = findMiddle(head);
    let leftHead = head;
    let rightHead = middle.next;

    middle.next = null;


       leftHead = mergeSortOnLL(leftHead);
       rightHead = mergeSortOnLL(rightHead);
       return mergeList(leftHead, rightHead);

}

ll.addNodeAtStart(2);
ll.addNodeAtEnd(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(4);
ll.head = mergeSortOnLL(ll.head);
ll.viewAllNodes(); 