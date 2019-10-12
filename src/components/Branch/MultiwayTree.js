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
                "name": new Date().toLocaleTimeString() + '-1-条件',
                "type": "condition",
                "prevId": nodeId,
                "nodeId": new Date().toLocaleTimeString() + '-1',
            },
            {
                "name": new Date().toLocaleTimeString() + '-2-条件',
                "type": "condition",
                "prevId": nodeId,
                "nodeId": new Date().toLocaleTimeString() + '-2',
            }
        ]

    }
}
class ConditionNodeSingle {
    constructor(nodeId, count) {
        return {
            "name": `${new Date().toLocaleTimeString()}-${count}-条件`,
            "type": "condition",
            "prevId": nodeId,
            "nodeId": `${new Date().toLocaleTimeString()}-${count}`,
        }


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
        // 这里是用了栈的思想去找当前选中的节点
        while (!found && currentNode) {
            if (currentNode.type === "route") {
                found = callback(currentNode) === true ? true : false;
                if (!found) {
                    queue.push(...currentNode.conditionNodes)
                    // 当 当前节点既有子节点也有条件节点时需要都push进入栈内
                    currentNode.childNode && queue.push(currentNode.childNode)
                    currentNode = queue.shift();
                }
            } else {
                found = callback(currentNode) === true ? true : false;
                if (!found) {
                    // 这里是因为当遇到route也就是条件节点的时候，会依次进入的每个条件中
                    // 这里加一个判断是为了避免在进入到某个条件中没有审核节点还去遍历它
                    currentNode.childNode && queue.push(currentNode.childNode)
                    currentNode = queue.shift();
                }
            }
        }
    }
    contains(callback, traversal) {
        traversal.call(this, callback);
    }
    add(option, toData, traversal) {
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
        let node
        if (parent) {

            // 确定有父节点再去创建子节点
            // true 是 审核或抄送节点 false 是 条件节点
            if (option.data.nodeType) {
                node = new AddNode(option.nodeId)
            } else if (option.data.type !== 'conditionNode') {
                node = new ConditionNode(option.nodeId)
            }
            if (parent.childNode&&option.data.type !== 'conditionNode') {
                // 如果在当前节点下增加审核节点，则当前节点下的所有子节点放置到条件1下
                if (node.conditionNodes) {
                    node.conditionNodes[0].childNode = parent.childNode
                } else {
                    node.childNode = parent.childNode;
                }
            }
            if (node) {
                this.context.$set(parent, 'childNode', node)
                node.parent = parent;
            }
            if (option.data.type === 'conditionNode') {
                node = new ConditionNodeSingle(option.nodeId, parent.conditionNodes.length + 1)
                parent.conditionNodes.push(node)
            }
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