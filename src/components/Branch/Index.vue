<template>
  <div class="box-scale">
    <StartNode :startNodeData="branchData"></StartNode>
    <BranchWrap
      v-if="branchData.childNode"
      :branchWrapData="branchData.childNode.conditionNodes"
    ></BranchWrap>
    <EndNode></EndNode>
  </div>
</template>
<script>
import BranchWrap from "./BranchWrap";
import AddNode from "./AddNode";
import StartNode from "./StartNode";
import EndNode from "./EndNode";

export default {
  name: "BranchIndex",
  props: {
    branchData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    EndNode,
    AddNode,
    StartNode,
    BranchWrap
  }
};
</script>