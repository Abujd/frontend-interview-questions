//Create a Node structure

class Node {
    constructor(data) { 
        this.data = data;
        this.next = null;

    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    getSize(){
        let c = 0;
        let currentNode = this.head;
        while(currentNode){ 
            c++;

            currentNode = currentNode.next;
        }
        return c;
    }

    addNodeAtStart(data){
        const newNode = new Node(data);
        newNode.next  = this.head;
        this.head = newNode;
    }

    addNodeAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head  = newNode;
            return;
        }
        let current = this.head;

        while(current.next !== null){
            current = current.next;
         }
         current.next = newNode;
    }

    addAtIndex(index, data){
        let c = 0;
        if(!this.head && index > 0){
            console.log("invalid Ops");
        }

        let currentNode = this.head;
        while(currentNode){ 
            c++;
            if(c === index){
                const newNode = new Node(data);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                break;;
            }
            currentNode = currentNode.next;
        }
        if(c < index  ){
            console.log("invalid ops =====ßßß");
        }
    }

    deleteFirstNode(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }

    deleteLastNode(){
        let current = this.head;
        while(current.next.next !== null){
            current  = current.next;
        }
       current.next = null;
    }

    deleteAtIndex(index){
        let c = 1;
        if(!this.head && index > 0){
            console.log("invalid Ops");
        }

        let currentNode = this.head;
        while(currentNode){ 
            c++;
            if(c === index){
                currentNode.next = currentNode.next.next;
                break;;
            }
            currentNode = currentNode.next;
        }
        if(c < index  ){
            console.log("invalid ops =====ßßß");
        }
    }


    viewAllNodes(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
// const ll = new LinkedList();

// // Add nodes at the beginning
// ll.addNodeAtStart(4);
// ll.addNodeAtStart(6);
// ll.addNodeAtStart(1);

// // Add node at the end
// ll.addNodeAtEnd(7);

// console.log("Initial Linked List:");
// ll.viewAllNodes();

// // Add node at a specific index
// ll.addAtIndex(3, 90);

// console.log("After adding node at index 3:");
// ll.viewAllNodes();

// // Delete node at a specific index
// ll.deleteAtIndex(2);

// console.log("After deleting node at index 2:");
// ll.viewAllNodes();

// // Delete the first node
// ll.deleteFirstNode();

// console.log("After deleting the first node:");
// ll.viewAllNodes();

// // Delete the last node
// ll.deleteLastNode();

// console.log("After deleting the last node:");
// ll.viewAllNodes();
// // Adding node at start
// console.log("Adding nodes at start:"); 
// ll.addNodeAtStart(0);

// ll.viewAllNodes();

// // Adding node at start
// console.log("Adding nodes at end:"); 
// ll.addNodeAtEnd(9);

// ll.viewAllNodes();

export { LinkedList, Node };