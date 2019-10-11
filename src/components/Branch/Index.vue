<script>
import BranchWrap from "./BranchWrap";
import AddNode from "./AddNode";
import StartNode from "./StartNode";
import AddNodebtnBox from "./AddNodebtnBox";

export default {
  name: "BranchIndex",
  props: {
    branchData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    AddNodebtnBox,
    AddNode,
    StartNode
  },
  beforeCreate: function() {
    this.$options.components.BranchWrap = require("./BranchWrap.vue").default;
  },
  render(createElement) {
    function getDom(nodeData) {
      let domLoopList = [];
      if (nodeData.type === "start") {
        domLoopList = domLoopList.concat([
          createElement("StartNode", {
            props: {
              startNodeData: nodeData
            }
          })
        ]);
      }
      if (nodeData.type === "condition") {
        domLoopList = domLoopList.concat([
          createElement("ConditionNode", {
            props: {
              conditionNodeData: nodeData
            }
          })
        ]);
      }
      if (nodeData.type === "approver") {
        domLoopList = domLoopList.concat([
          createElement("AddNode", {
            props: {
              addData: nodeData
            }
          })
        ]);
      }
      if (nodeData.type === "route") {
        domLoopList = domLoopList.concat([
          createElement("BranchWrap", {
            props: {
              branchWrapData: nodeData.conditionNodes
            }
          })
        ]);
      }
      if (nodeData.childNode) {
        domLoopList = domLoopList.concat(getDom(nodeData.childNode));
      }
      return domLoopList;
    }
    const domList = getDom(this.branchData);
    console.log("domList", domList);
    return createElement(
      "div",
      {
        attrs: {
          class: "box-scale"
        }
      },
      domList
    );
  }
};
</script>