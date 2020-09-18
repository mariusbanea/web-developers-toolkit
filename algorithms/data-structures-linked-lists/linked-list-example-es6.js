//create a linked list object
let list = function (e) {
    //"self" is the global "this" to be used for all methods; the local "this"-es are to be used inside each method
    const self = this;

    //define key elements...

    //first element in the list
    let first;
    //last element in the list
    let last;
    //current element in the list
    let head;


    //insert a new value method
    self.insert = value => {
        //create a node that will hold the new node value
        const node = new Node(value);
        //if there are no nodes...
        if (first == null) {
            //new node will be the first node and the last
            first = last = node;
        } else {
            //if there are already elements in the linked list
            //head = first means that we start from the beginning of the list
            let head = first;
            //if next element is not null continue through the list
            while (head.next != null) {
                head = head.next;
            }
            //when you reach the end of the list, add node.
            head.next = node;
            //The end of the list will be the last element
            last = head.next;
        }
    }

    //display all node values
    self.show = () => {
        //head = first means that we start from the beginning of the list
        let head = first;
        //if next element is not null continue through the list
        while (head != null) {
            //show existing value
            console.log(head.value);
            head = head.next;
        }
    }



    // remove a value method (find a value and remove it)
    self.remove = value => {
        //make found = false - we did not find the value we were looking for
        let found = false;
        //start at beginning of list
        let head = first;
        //if next element is not null continue through the list
        while (head != null) {
            //if first value is equal to value we are looking for
            if (first.value == value) {
                //if we need to delete first element in pile, remove first element and make second element the first element
                prev = head = first = first.next;
                //we found the element we want to delete
                found = true;
            }
            //remove any subsequent element in the pile
            else {
                //if current value is the value we are searching for
                if (head.value == value) {
                    //we found the element we want to delete
                    found = true;
                    //remove element related to value.
                    prev.next = head.next;
                }
                //previous element will now be the head
                prev = head;
                //head will go further from there
                head = head.next;
            }
        }
        //if we didn't find anything, show error
        if (!found) {
            console.log(`#${value} not found`);
        }
    }

    //update method - find old value (value) and the newValue to be updated
    self.update = (value, newValue) => {
        //start at the beginning of the linked list
        let head = first;
        //as long as the head value is not equal to null - continue iterating through list
        while (head != null) {
            //if current value is the value we are searching for...
            if (head.value == value) {
                //update current value with new value
                head.value = newValue;
            }
            //after current value has been updated, go to the following one
            head = head.next
        }
    }

    //return the amount of Nodes in the list
    self.size = () => {
        //head = first means that we start from the beginning of the list
        let head = first;
        //define the counter
        let i = 0;
        //if next element is not null continue through the list
        while (head != null) {
            //increment the counter
            i++;
            head = head.next;
        }
        //display results
        console.log(i);
    }

    self.findMiddle = () => {
        //start at the beginning of the linked list
        let head = first;
        //define the slowPointer the one going one element at a time
        let slowPointer = head;
        //define the fastPointer the one going 2 elements at a time
        let fastPointer = head;
        while (fastPointer.next !== undefined && fastPointer.next.next !== undefined) {
            //parse the linked list 2 elements at a time
            fastPointer = fastPointer.next.next;
            //parse the linked list one element at a time
            slowPointer = slowPointer.next;
        }
        //by the time the fastPointer is reaching the end of the list the slowPointer one is in the middle
        console.log(slowPointer.value);
    }

    //defines the value that needs to be changed
    let Node = function (value) {
        //this is referring to this Node, to the value that needs to be changed
        this.value = value;
        //as we continue through the values, every "next" will be considered a new object that we will fill with data
        const next = {};
    }
    //return the updated function with all methods and new values
    return self;
};


//create a new instance of the list object
let exampleList = new list();

//add new elements in the list
exampleList.insert(1);
exampleList.insert(2);
exampleList.insert(3);
exampleList.insert(4);
exampleList.insert(5);
exampleList.insert(6);
exampleList.insert(7);
exampleList.insert(8);
exampleList.insert(9);
//show the list with the new elements in the list
console.log("----> show the list with the new elements in the list");
exampleList.show();


//show the size in the list
console.log("----> show the size in the list");
exampleList.size();

//show the size in the list
console.log("----> find the middle of the linked list");
exampleList.findMiddle();


//updated the second element and make it 5
exampleList.update(2, 5);
//show the list with updated element
console.log("----> show the list with updated element");
exampleList.show();




//remove the 3 element in the list
exampleList.remove(3);
//show the list without the removed element
console.log("----> show the list without the removed element");
exampleList.show();
