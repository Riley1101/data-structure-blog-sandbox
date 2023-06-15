"use strict";
exports.__esModule = true;
exports.breadthFirstSearch = exports.breadthFirstSearchRec = exports.Tree = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
exports.Node = Node;
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = undefined;
    }
    Tree.prototype.push = function (value) {
        var newNode = new Node(value);
        if (this.root === undefined) {
            this.root = newNode;
            return newNode;
        }
        var tmp = this.root;
        while (true) {
            if (value < tmp.value) {
                if (tmp.left === null) {
                    tmp.left = newNode;
                    return newNode;
                }
                tmp = tmp.left;
            }
            else {
                if (tmp.right === null) {
                    tmp.right = newNode;
                    return newNode;
                }
                tmp = tmp.right;
            }
        }
    };
    Tree.prototype._traverse = function (node, value) {
        var current = node;
        var parent = null;
        while (current) {
            if (value < current.value) {
                if (current.value === value) {
                    return {
                        node: current,
                        parent: parent
                    };
                }
                parent = current;
                current = current.left;
            }
            else {
                if (current.value === value) {
                    return {
                        node: current,
                        parent: parent
                    };
                }
                parent = current;
                current = current.right;
            }
        }
    };
    Tree.prototype.print_tree = function () {
        var raw = JSON.stringify(this.root);
        console.log(raw);
    };
    Tree.prototype.remove = function (value) {
        if (this.root === null) {
            return -1;
        }
        var res = this._traverse(this.root, value);
        var target = res === null || res === void 0 ? void 0 : res.node;
        var parent = res === null || res === void 0 ? void 0 : res.parent;
        if (!target || !parent)
            return -1;
        /** removed with one child */
        if ((parent === null || parent === void 0 ? void 0 : parent.left) && parent.left.value === value) {
            parent.left = null;
        }
        else if ((parent === null || parent === void 0 ? void 0 : parent.right) && parent.right.value === value) {
            parent.right = null;
        }
        return target.value;
    };
    return Tree;
}());
exports.Tree = Tree;
function breadthFirstSearchRec(queue, result) {
    if (!queue.length)
        return result;
    var node = queue.shift();
    result.push(node.value);
    if (node.left)
        queue.push(node.left);
    if (node.right)
        queue.push(node.right);
    return breadthFirstSearchRec(queue, result);
}
exports.breadthFirstSearchRec = breadthFirstSearchRec;
function breadthFirstSearch(queue, result) {
    while (queue.length) {
        var node = queue.shift();
        result.push(node.value);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return result;
}
exports.breadthFirstSearch = breadthFirstSearch;
var tr = new Tree();
tr.push(6);
tr.push(5);
tr.push(4);
tr.push(3);
tr.push(8);
tr.push(7);
console.log(tr.remove(3));
console.log(tr.root);
console.log(tr.root);
