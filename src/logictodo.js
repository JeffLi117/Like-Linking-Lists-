export default function logictodo() {

    const Node = function(x, y) {
        this.value = x;
        this.nextNode = y; //type Node
    }

    const LinkedList = function() {

        this.size = 0;
        this.head = null; //type Node
        this.tail = null; //type Node
        this.holder = null; //type Node
        this.beforeRemoved = null; //type Node
        this.afterRemoved = null; //type Node

        this.append = (value) => {
            let newNode = new Node(value, null);
            this.size++;
            //if list is empty, newNode becomes head
            if (this.head === null) {
                this.head = newNode;
            } else {
                this.tail.nextNode = newNode;
            }//if list isn't empty, previous tail (which was = null) is now newNode 
            
            //this.tail = newNode;
            this.tail = newNode;
        }
        this.prepend = (value) => {
            let newNode = new Node(value, null);
            this.size++;
            //if list is empty, newNode is tail
            if (this.head === null) {
                this.tail = newNode;
            } else {
                newNode.nextNode = this.head;
                this.head = newNode;
            }
            //if list isn't empty
            //this node's nextNode will be previous head
            //this node will become new head

            //always become the head
            this.head = newNode;
        }
        this.atIndex = (index) => {
            //with 0-based index, what is the value in the linked list
            //[5,4,8,332,1]
            //testList.atIndex(3) = 332
            //start with this.head which is index 0
            let currentNode = this.head; //go to nextNode "index" # of times
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode;
            }
            //return value at that node
            return currentNode.value;

            ///USE CASE: if INDEX is > this.size, return;
        }
        this.printList = () => { //printing to console
            let currentNode = this.head;
            for (let i = 0; i < this.size; i++) {
                console.log(currentNode.value);
                currentNode = currentNode.nextNode;
            }
        }
        this.pop = () => {
            let currentNode = this.head;
            for (let i = 0; i < this.size - 1; i++) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
            //size
            this.size--;
            //head shouldn't
            //USE CASE: what if list is size 2 during pop

            //tail
            this.tail = currentNode;
        }
        this.insertAt = (value, index) => {
            //with 0-based index, what is the value in the linked list
            //[5,4,8,332,1]
            //add node w/ value 67 at index 2
            //start with this.head which is index 0
            let currentNode = this.head; //go to nextNode "index" # of times
            for (let i = 0; i < index; i++) {
                if (i === index -1) {
                    this.holder = currentNode;//"holds" the prior Node
                }
                currentNode = currentNode.nextNode;
            }
            //create Node to be inserted w/ value given and nextNode to be the currentNode that is being "pushed back"
            let insertedNode = new Node(value, currentNode);
            //set .nextNode of Node before inserted (in the holder) to insertedNode
            this.holder.nextNode = insertedNode; 

            //size
            this.size++;
            //head (changes only if inserted at index 0)
            //tail (changes only if inserted at last index)
            //USE CASE: cannot add value if index doesn't exist in list
        }
        this.removeAt = (index) => {
            let currentNode = this.head; //go to nextNode "index" # of times
            for (let i = 0; i < this.size; i++) {
                if (i === index -1) {
                    this.beforeRemoved = currentNode;//"holds" the Node before one being removed
                } else if (i === index + 1) {
                    this.afterRemoved = currentNode;//"holds" the Node after the one being removed
                }
                currentNode = currentNode.nextNode;
            }
            this.beforeRemoved.nextNode = this.afterRemoved;
            //size
            this.size--;
        }
        this.contains = (value) => {
            //true if within list, false if not
            let currentNode = this.head;
            for (let i = 0; i < this.size; i++) {
                if (currentNode.value == value) {
                    return true;
                }
                currentNode = currentNode.nextNode;
            }
            return false;
        }
        this.find = (value) => {
            //index of value or null if not found
            let currentNode = this.head;
            for (let i = 0; i < this.size; i++) {
                if (currentNode.value == value) {
                    return i;
                }
                currentNode = currentNode.nextNode;
            }
            return null;
        }
        this.toString = () => {
            let currentNode = this.head;
            let stringHolder = "";
            for (let i = 0; i < this.size; i++) {
                stringHolder += `${currentNode.value} -> `;
                currentNode = currentNode.nextNode;
            }
            stringHolder += "null";
            return stringHolder;
        }
    }

    const testList = new LinkedList();
    testList.append(6);
    testList.append(2);
    testList.prepend(7);
    testList.prepend(23);
    testList.append(11);
    testList.insertAt(69,2);
    testList.removeAt(2);
    testList.removeAt(3);
    testList.printList();
    console.log(testList.atIndex(2));
    console.log(testList.toString());
}

