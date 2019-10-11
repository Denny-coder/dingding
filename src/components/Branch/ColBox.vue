
<script>
import AddNode from "./AddNode";
import ConditionNode from "./ConditionNode";
import BranchWrap from "./BranchWrap";
export default {
  name: "ColBox",
  props: {
    colBoxData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    isRight: {
      type: Boolean,
      default: false
    },
    isLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      componentsType: "AddNode"
    };
  },
  beforeCreate: function() {
    this.$options.components.BranchWrap = require("./BranchWrap.vue").default;
  },
  components: {
    AddNode,
    ConditionNode
  },
  render: function(createElement) {
    let childrenDom = [];
    // 判断左右的线段覆盖
    const rightOrLeft = this.isRight ? "right" : this.isLeft ? "left" : "";
    childrenDom.push(
      createElement("div", {
        attrs: {
          class: `top-${rightOrLeft}-cover-line`
        }
      }),
      createElement("div", {
        attrs: {
          class: `bottom-${rightOrLeft}-cover-line`
        }
      })
    );
    function getDom(nodeData) {
      let domList = [];
      if (nodeData.type === "condition") {
        domList = domList.concat([
          createElement("ConditionNode", {
            props: {
              conditionNodeData: nodeData
            }
          })
        ]);
      }
      if (nodeData.type === "approver") {
        domList = domList.concat([
          createElement("AddNode", {
            props: {
              addData: nodeData
            }
          })
        ]);
      }
      if (nodeData.type === "route") {
        domList = domList.concat([
          createElement("BranchWrap", {
            props: {
              branchWrapData: nodeData.conditionNodes
            }
          })
        ]);
      }
      if (nodeData.childNode) {
        domList = domList.concat(getDom(nodeData.childNode));
      }
      return domList;
    }
    const arr = getDom(this.colBoxData);
    childrenDom = childrenDom.concat(arr);
    return createElement(
      "div",
      {
        attrs: {
          class: "col-box"
        }
      },
      childrenDom
    );
  }
};
</script>