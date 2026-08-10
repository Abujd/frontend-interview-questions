class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL {
    constructor() {
        this.head = null;
    }

    addNodeAtStart(data) {
        const newNode = new Node(data);

        // New node points to current head
        newNode.next = this.head;

        // Old head points back to new node
        if (this.head !== null) {
            this.head.prev = newNode;
        }

        // New node becomes head
        this.head = newNode;
    }

    addNodeAtBeforeTail(data) {
        let current = this.head;
            while (current.next) {
            current = current.next;
        }
    
        const newNode = new Node(data);
    
        let prevNode = current.prev;
    
        // Connect new node with previous node
        prevNode.next = newNode;
        newNode.prev = prevNode;
    
        // Connect new node with tail
        newNode.next = current;
        current.prev = newNode;
    }

    deleteHead(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        if(this.head !== null ){
            this.head.next.prev = null;

        }
    }
    deleteTail(){

        let current = this.head;
        if(current === null){
            return;
        }
        while(!current.next){
            current = current.next;
        }
        let prev = new Node();
        prev =  current.prev;
        prev.next = null;
        current.prev = null;

    }

    deleteKElement(index){
        let current = this.head;
        let c = 0 ;
        while (current) {
            c++;
            if(c === index){
                break;
            }
            current = current.next;
        }
        let nextNode = current.next;
        let prevNode = current.prev;
        if(nextNode === null && prevNode === null)
            return;
        else if(prevNode === null){
            this.head = current;
            
            this.deleteHead();

        } else if(nextNode === null){
            this.deleteTail;
        }
        prevNode.next = nextNode;
        nextNode.back = prevNode;

        current.next = null;
        current.prev = null;

    }


    viewAllNodes() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    viewReverseNodes() {
        let current = this.head;

        // First reach the last node
        while (current.next !== null) {
            current = current.next;
        }

        // Now move backwards using prev
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const ll = new DoublyLL();

ll.addNodeAtStart(4);
ll.addNodeAtStart(6);
ll.addNodeAtBeforeTail(5);
ll.viewAllNodes();
// ll.viewReverseNodes();