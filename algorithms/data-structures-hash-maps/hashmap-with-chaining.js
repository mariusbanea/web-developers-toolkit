// Walk through the HashMap implementation in the curriculum and understand it well. Then write a HashMap class and its core functions with open addressing as the collision resolution mechanism.

class HashMap {
    constructor(initialCapacity = 8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
        this.MAX_LOAD_RATIO = 0.5;
        this.SIZE_RATIO = 3;
    }

    get(key) {
        const index = (HashMap._hashString(key) % this._capacity);

        if (this._hashTable[index] === undefined) {
            return undefined;
        }
        else if (this._hashTable[index].key !== key) {
            let currentNode = this._hashTable[index].next;

            // Check for null currentNode to avoid an infinite loop
            while (currentNode && currentNode.key !== key) {
                currentNode = currentNode.next;
            }

            return currentNode.key === key ? currentNode.value : { Error: 'Key Error' };
        }
        else {
            return this._hashTable[index].value;
        }
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > this.MAX_LOAD_RATIO) { // Minimize the chance a value ends up a long way from its hash position

            this._resize(this._capacity * this.SIZE_RATIO) // The ratio by which to increment the size of the hashmap
        }

        const index = (HashMap._hashString(key) % this._capacity);

        // Increment the length property when we add a new key/value

        if (this._hashTable[index] === undefined) {
            this._hashTable[index] = {
                key,
                value,
                next: null, // To facilitate separate chaining we'll set a pointer on our object called next
                DELETED: false
            }
            this.length++;
        }
        else if (this._hashTable[index].key === key) {
            this._hashTable[index].value = value;
        }
        else if (this._hashTable[index].key !== key) {  // Separate chaining to resolve hash table collisions
            let currentNode = this._hashTable[index];

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = {
                key,
                value,
                next: null, // To facilitate separate chaining we'll set a pointer on our object called next
                DELETED: false
            }
            this.length++;
        }
        else {
            throw Error('Key error')
        }
        // Our data is stored as an object in an array
        // and since objects are reference types, it is actually just the pointer to our object being stored in the array
    }

    delete(key) { // Open addressing adds complexity here, because we can't rely on the hashed index to be accurate every time.
        //  the simplest solution is to not actually delete the item at all, and just put a deleted marker in the slot. Then on resize you can actually clear out all of the deleted items. This means that the hash map loads up slightly more quickly, but simplifies the code significantly.

        const index = (HashMap._hashString(key) % this._capacity);

        if (this._hashTable[index] === undefined) {
            throw new Error('Key Error: Key Not Found')
        }
        else if (this._hashTable[index].key === key) {
            this._hashTable[index].DELETED = true;
            this.length--;
            this._deleted++;
        }
        else if (this._hashTable[index].key !== key) {
            let currentNode = this._hashTable[index];

            while (currentNode && currentNode.key !== key) {
                currentNode = currentNode.next;
            }

            if (currentNode.key === key) {
                currentNode.DELETED = true;
                this.length--;
                this._deleted++;
            }
            else {
                throw Error('Key Error: Key Not Found')
            }
        }
    }

    keys() {
        const keysArray = [];

        this._hashTable.forEach(el => {
            keysArray.push(el.key)
        })

        return keysArray;
    }

    _findSlot(key) { // O(1) assuming we are avoiding excessive collisions
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        // We use a for loop to avoid collisions by open addressing
        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) { // O(n) because were are looping over each key/value in order to add them to our new, larger hash table
        const oldSlots = this._hashTable;
        this._capacity = size;

        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    // hashing function using djb2 algorithm
    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            // bitwise shift left
            hash = (hash << 5) + hash + string.charCodeAt(i);
            // bitwise AND
            hash = hash & hash;
        }
        // bitwise zero-fill right shift
        return hash >>> 0;
    }
}

function main() {
    const lotr = new HashMap;

    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    lotr.set('Ent1', 'Treebeard');
    lotr.set('Ent2', 'Treebeard');
    lotr.set('Ent3', 'Treebeard');

    lotr.get('Hobbit')
    lotr.get('Maiar')

    console.log(lotr);
    console.log(lotr._hashTable[23])
}
main()

// HashMap {
//     length: 11,
//     _hashTable:
//      [ <2 empty items>,
//        { key: 'HalfElven', value: 'Arwen', next: null, DELETED: false },
//        <1 empty item>,
//        { key: 'LadyOfLight',
//          value: 'Galadriel',
//          next: null,
//          DELETED: false },
//        <1 empty item>,
//        { key: 'Wizard',
//          value: 'Gandalf',
//          next: [Object],
//          DELETED: false },
//        <5 empty items>,
//        { key: 'Elf', value: 'Legolas', next: null, DELETED: false },
//        { key: 'Hobbit', value: 'Frodo', next: null, DELETED: false },
//        <6 empty items>,
//        { key: 'Ent', value: 'Treebeard', next: null, DELETED: false },
//        { key: 'Ent1', value: 'Treebeard', next: null, DELETED: false },
//        { key: 'Ent2', value: 'Treebeard', next: null, DELETED: false },
//        { key: 'Maiar', value: 'Sauron', next: [Object], DELETED: false } ],
//     _capacity: 24,
//     _deleted: 0,
//     MAX_LOAD_RATIO: 0.5,
//     SIZE_RATIO: 3 }

    // And if we look at the key 'Maiar' where we had a collision, there's a chain going on:

        // { key: 'Maiar',
        //   value: 'Sauron',
        //   next:
        //    { key: 'Ent3', value: 'Treebeard', next: null, DELETED: false },
        //   DELETED: false }

module.exports = HashMap;