import { LinkedList } from "./LinkedListBasics.js";

const ll = new LinkedList();

function isPalindromeList(head){
    let stack = [];
    let current = head;
    while(current){
        stack.push(current.data);
        current = current.next;
    }
    current = head;
    while(current){
        if(current.data === stack.pop()){
            current = current.next;
        }else{
            return false;
        }
    }

    return true;

}

function isPalindromeListUsingString(head){
    let current = head;
    let res = "";
    while(current){
        res += current.val;
        current = current.next;
    }
    return res === res.split('').reverse().join('');
}


ll.addNodeAtStart(1);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(3);
ll.addNodeAtEnd(2);
ll.addNodeAtEnd(1);
console.log(isPalindromeList(ll.head));
console.log(isPalindromeListUsingString(ll.head));


ll.viewAllNodes();
