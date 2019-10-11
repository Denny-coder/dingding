class AddNode {
    constructor(nodeId) {
        this.nodeId = nodeId;
        this.name = nodeId;
        this.type = 'approver';
        this.parent = null;
    }
}
class ConditionNode {
    constructor(nodeId) {
        this.nodeId = nodeId;
        this.type = 'route';
        this.parent = null;
        this.conditionNodes = [
            {
                "name": new Date().toLocaleTimeString() + '-1-添加',
                "type": "condition",
                "prevId": nodeId,
                "nodeId": new Date().toLocaleTimeString() + '-1',
            },
            {
                "name": new Date().toLocaleTimeString() + '-2-添加',
                "type": "condition",
                "prevId": nodeId,
                "nodeId": new Date().toLocaleTimeString() + '-2',
            }
        ]

    }
}
export class MultiwayTree {
    constructor(tree, context) {
        this._root = tree;
        this.context = context; // 上下文环境
    }
    //深度优先遍历
    traverseDF(callback) {
        let stack = [], found = false;
        stack.unshift(this._root);
        let currentNode = stack.shift();
        while (!found && currentNode) {
            found = callback(currentNode) === true ? true : false;
            if (!found) {
                stack.unshift(...currentNode.childNode);
                currentNode = stack.shift();
            }
        }
    }
    //广度优先遍历
    traverseBF(callback) {
        let queue = [], found = false;

        queue.push(this._root);
        let currentNode = queue.shift();
        while (!found && currentNode) {
            if (currentNode.type === "route") {
                // currentNode.conditionNodes.some(item=>{

                // })
            } else {
                found = callback(currentNode) === true ? true : false;
                if (!found) {
                    queue.push(currentNode.childNode)
                    currentNode = queue.shift();
                }
            }

        }
    }
    contains(callback, traversal) {
        traversal.call(this, callback);
    }
    add(option, toData, traversal) {
        debugger

        let node = option.data.nodeType ? new AddNode(option.nodeId) : new ConditionNode(option.nodeId)
        if (this._root === null) {
            this._root = node;
            return this;
        }
        let parent = null,
            callback = function (node) {
                if (node.nodeId === toData) {
                    parent = node;
                    return true;
                }
            };
        this.contains(callback, traversal);

        if (parent) {
            if (parent.childNode) {
                if (node.conditionNodes) {
                    node.conditionNodes[0].childNode = parent.childNode
                } else {
                    node.childNode = parent.childNode;
                }
            }
            this.context.$set(parent, 'childNode', node)
            node.parent = parent;
            return this;
        } else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    }
    remove(nodeId, fromData, traversal) {
        let parent = null,
            childToRemove = null,
            callback = function (node) {
                if (node.nodeId === fromData) {
                    parent = node;
                    return true;
                }
            };
        this.contains(callback, traversal);
        if (parent) {
            let index = this._findIndex(parent.childNode, nodeId);
            if (index < 0) {
                throw new Error('AddNode to remove does not exist.');
            } else {
                childToRemove = parent.childNode.splice(index, 1);
            }
        } else {
            throw new Error('Parent does not exist.');
        }
        return childToRemove;
    }
    _findIndex(arr, nodeId) {
        let index = -1;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].nodeId === nodeId) {
                index = i;
                break;
            }
        }
        return index;
    }
}