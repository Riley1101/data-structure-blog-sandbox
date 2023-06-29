export class Node {
    parent: Node;
    value: string
    children: Map<string, Node>
    isComplete: boolean
    constructor(value: string = '') {
        this.value = value
        this.children = new Map()
        this.isComplete = false
        this.parent = null
    }
}

export class Tries {
    root: Node | null
    constructor() {
        this.root = new Node()
    }

    _getHistory(parent: Node): string {
        let word = ''
        let current = parent
        while (current) {
            word += current.value
            current = current.parent
        }
        return word
    }

    insert(word: string) {
        if (!word) return false
        let currentNode = this.root
        for (const letter of word) {
            if (!currentNode.children.has(letter)) {
                let newNode = new Node(letter)
                newNode.parent = currentNode
                currentNode.children.set(letter, newNode)
            }
            currentNode = currentNode.children.get(letter)
        }
        currentNode.isComplete = true;
        return currentNode
    }

    traverse() {
        let stack = [this.root]
        let result = []
        while (stack.length) {
            let current = stack.pop()
            result.push(current.value)
            current.children.forEach(item => {
                stack.push(item)
            })
        }
        return result
    }

    getWords() {
        let stack = [this.root]
        let result = []
        let word = ''
        while (stack.length) {
            let current = stack.pop()
            current.children.forEach(item => {
                stack.push(item)
            })
            word += current.value
            if (current.isComplete) {
                result.push(word)
            }
        }
        return result
    }
}

let t1 = new Tries()
t1.insert("ab")
t1.insert("abc")
t1.insert("abd")
console.log(t1.getWords())
