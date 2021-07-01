////////////////////////////////////////////////////////////////////
///////////////// helper functions /////////////////////////////////
////////////////////////////////////////////////////////////////////
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(values) {
        this.head = null;

        if (values && Array.isArray(values)) {
            values.reverse().forEach((value) => this.insertAtHead(value));
        }
    }

    /**
     * The number of nodes in the linked list.
     * The value is an unsigned, 32-bit integer that is always 1 greater than the highest index in the list.
     *
     * @returns {number}
     *   the number of nodes in the linked list.
     */

    get length() {
        let result = 0;
        let node = this.head;

        while (node) {
            result++;
            node = node.next;
        }
        return result;
    }

    /**
     * Find a node in the linked list.
     *
     * @param isMatch
     *  function that returns true if the current node matches the search criteria.
     *
     * @returns {*|null}
     *  the first node where `isMatch(node, index) === true` or null if no match is found.
     */
    find(isMatch) {
        return this.findWithPrevious(isMatch)[0];
    }

    /**
     * Insert the value after a matched node in the list.
     * By default, the value is inserted at the end of the list.
     *
     * @param value
     *  the value to add.
     *
     * @param isMatch
     *  Optional function that returns true if the current node matches the search criteria.
     *
     * @returns {LinkedList}
     *  this linked list so methods can be chained.
     *
     * @throws 'No match found.'
     *  if list is not empty and no matching node is found.
     */
    insert(value, isMatch = (node, index) => index === this.length - 1) {
        if (this.head) {
            const previousNode = this.find(isMatch);

            if (!previousNode) {
                throw new Error("No match found.");
            }

            previousNode.next = new Node(value, previousNode.next);
        } else {
            this.insertAtHead(value);
        }
        return this;
    }

    /**
     * Insert a new value at the head of the list.
     * @param value
     *  the new value to insert
     *
     * @returns {LinkedList}
     *  this linked list so methods can be chained.
     */
    insertAtHead(value) {
        this.head = new Node(value, this.head);
        return this;
    }

    /**
     * Find a node, and it's previous node, in the linked list.
     * @param isMatch
     *  function that returns true if the current node matches the search criteria.
     *
     * @returns {[Node|null, Node|null]}
     *  the first element is the node where `isMatch(node, index) === true` or null if no match is found.
     *  the second element is the previous Node, or null if no match is found.
     *  This second element is also null if this.head is the matched node.
     */
    findWithPrevious(isMatch) {
        let index = 0;
        let previous = null;
        let node = this.head;
        while (node) {
            if (isMatch(node, index, this)) {
                return [node, previous];
            }
            index++;
            previous = node;
            node = node.next;
        }
        return [null, null];
    }

    /**
     * Remove the first node where `isMatch(node, index, this) === true`.
     *
     * @param isMatch
     *  function that returns true if the current node matches the node to be removed.
     *
     * @returns {LinkedList}
     *  this linked list so methods can be chained.
     */

    remove(isMatch) {
        const [matchedNode, previousNode] = this.findWithPrevious(isMatch);

        if (this.head === matchedNode) {
            this.head = this.head.next;
        } else {
            previousNode.next = matchedNode.next;
        }
        return this;
    }

    /**
     * Return the values of the linked list as an array
     *
     * @returns {Array}
     * the values in this linked list in an array
     */
    asArray() {
        const values = [];
        let node = this.head;
        while (node) {
            values.push(node.value);
            node = node.next;
        }
        return values;
    }

    /**
     * Create a string representation of this linked list
     *
     * @returns {String}
     * A String representation of this linked list
     */
    toString() {
        return `|${this.asArray().join("->")}|`;
    }
}

////////////////////////////////////////////////////////////////////
///////////////// data /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

const data = [
    "All human beings are born free and equal in dignity and rights.",
    "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
    "Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status.",
    "Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.",
    "Everyone has the right to life, liberty and security of person.",
    "No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.",
    "No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.",
    "Everyone has the right to recognition everywhere as a person before the law.",
    "All are equal before the law and are entitled without any discrimination to equal protection of the law.",
    "All are entitled to equal protection against any discrimination in violation of this Declaration and against any incitement to such discrimination.",
    "Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.",
    "No one shall be subjected to arbitrary arrest, detention or exile.",
    "Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.",
    "Everyone charged with a penal offence has the right to be presumed innocent until proved guilty according to law in a public trial at which he has had all the guarantees necessary for his defence.",
    "No one shall be held guilty of any penal offence on account of any act or omission which did not constitute a penal offence, under national or international law, at the time when it was committed. Nor shall a heavier penalty be imposed than the one that was applicable at the time the penal offence was committed.",
    "No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation.",
    "Everyone has the right to the protection of the law against such interference or attacks.",
    "Everyone has the right to freedom of movement and residence within the borders of each state.",
    "Everyone has the right to leave any country, including his own, and to return to his country.",
    "Everyone has the right to seek and to enjoy in other countries asylum from persecution.",
    "This right may not be invoked in the case of prosecutions genuinely arising from non-political crimes or from acts contrary to the purposes and principles of the United Nations.",
    "Everyone has the right to a nationality.",
    "No one shall be arbitrarily deprived of his nationality nor denied the right to change his nationality.",
    "Men and women of full age, without any limitation due to race, nationality or religion, have the right to marry and to found a family.",
    "They are entitled to equal rights as to marriage, during marriage and at its dissolution.",
    "Marriage shall be entered into only with the free and full consent of the intending spouses.",
    "The family is the natural and fundamental group unit of society and is entitled to protection by society and the State.",
    "Everyone has the right to own property alone as well as in association with others.",
    "No one shall be arbitrarily deprived of his property.",
    "Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",
    "Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.",
    "Everyone has the right to freedom of peaceful assembly and association.",
    "No one may be compelled to belong to an association.",
    "Everyone has the right to take part in the government of his country, directly or through freely chosen representatives.",
    "Everyone has the right of equal access to public service in his country.",
    "The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal and equal suffrage and shall be held by secret vote or by equivalent free voting procedures.",
    "Everyone, as a member of society, has the right to social security and is entitled to realization, through national effort and international co-operation and in accordance with the organization and resources of each State, of the economic, social and cultural rights indispensable for his dignity and the free development of his personality.",
    "Everyone has the right to work, to free choice of employment, to just and favourable conditions of work and to protection against unemployment.",
    "Everyone, without any discrimination, has the right to equal pay for equal work.",
    "Everyone who works has the right to just and favourable remuneration ensuring for himself and his family an existence worthy of human dignity, and supplemented, if necessary, by other means of social protection.",
    "Everyone has the right to form and to join trade unions for the protection of his interests.",
    "Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.",
    "Everyone has the right to a standard of living adequate for the health and well-being of himself and of his family, including food, clothing, housing and medical care and necessary social services, and the right to security in the event of unemployment, sickness, disability, widowhood, old age or other lack of livelihood in circumstances beyond his control.",
    "Motherhood and childhood are entitled to special care and assistance.",
    "All children, whether born in or out of wedlock, shall enjoy the same social protection.",
    "Everyone has the right to education.",
    "Education shall be free, at least in the elementary and fundamental stages.",
    "Elementary education shall be compulsory.",
    "Technical and professional education shall be made generally available and higher education shall be equally accessible to all on the basis of merit.",
    "Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedoms.",
    "It shall promote understanding, tolerance and friendship among all nations, racial or religious groups, and shall further the activities of the United Nations for the maintenance of peace.",
    "Parents have a prior right to choose the kind of education that shall be given to their children.",
    "Everyone has the right freely to participate in the cultural life of the community, to enjoy the arts and to share in scientific advancement and its benefits.",
    "Everyone has the right to the protection of the moral and material interests resulting from any scientific, literary or artistic production of which he is the author.",
    "Everyone is entitled to a social and international order in which the rights and freedoms set forth in this Declaration can be fully realized.",
    "Everyone has duties to the community in which alone the free and full development of his personality is possible.",
    "In the exercise of his rights and freedoms, everyone shall be subject only to such limitations as are determined by law solely for the purpose of securing due recognition and respect for the rights and freedoms of others and of meeting the just requirements of morality, public order and the general welfare in a democratic society.",
    "These rights and freedoms may in no case be exercised contrary to the purposes and principles of the United Nations.",
    "Nothing in this Declaration may be interpreted as implying for any State, group or person any right to engage in any activity or to perform any act aimed at the destruction of any of the rights and freedoms set forth herein.",
];

const conc = concordance(data);
const words = new LinkedList(["human", "free", "enjoy"]);


////////////////////////////////////////////////////////////////////
///////////////// challenge ////////////////////////////////////////
////////////////////////////////////////////////////////////////////


/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/

function concordance(data) {
    let map = new Map();

    for (let [index, sentence] of data.entries()) {
        console.log("inside the for ", index, sentence)

        let wordsArray = [...new Set(sentence.split(/[\s.,';]/))];

        wordsArray.forEach((word) => {
            word = word.toLowerCase();
            if (word !== "") {
                if (map.get(word)) {
                    map.set(word, [...map.get(word), index]);
                } else {
                    map.set(word, [index]);
                }
            }
        });

    }
    // Object.fromEntries() method transforms a list of key-value pairs into an object.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
    let conc = Object.fromEntries(map);

    return conc;
}

console.log(concordance(data));


/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {

    let word = words.head;

    let result = [];

    if (!word) return [];

    while (word) {

        if (concordance.hasOwnProperty(word.value)) {
            let key = word.value;
            for (let index = 0; index < concordance[key].length; index++) {
                let sentenceIndex = concordance[key][index];

                let sentence = data[sentenceIndex];

                if (result.includes(sentence)) {
                    continue;
                } else {
                    result.push(sentence);
                }
            }

        } else {
            return [];
        }

        word = word.next;
    }

    return result;
}


console.log(searchLines(words, conc, data));