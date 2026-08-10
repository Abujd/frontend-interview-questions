import { LinkedList } from "./LinkedListBasics.js";

const ll = new LinkedList();

ll.addNodeAtStart(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(4);
ll.addNodeAtEnd(5);

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next;

        current.next = prev;

        prev = current;
        current = nextNode;
    }

    return prev;
}

ll.head = reverseList(ll.head);

ll.viewAllNodes();