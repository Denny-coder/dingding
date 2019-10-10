<template>
  <div class="branch-wrap">
    <div class="branch-box-wrap">
      <div class="branch-box">
        <button class="add-branch">添加条件</button>
        <ColBox
          v-for="(item, index) in branchWrapData"
          :key="item.name"
          :isRight="index===branchWrapData.length-1"
          :isLeft="index===0"
          :colBoxData="item"
        ></ColBox>
      </div>
    </div>
    <EndNode></EndNode>
  </div>
</template>
<script>
import ConditionNode from "./ConditionNode";
import EndNode from "./EndNode";
import ColBox from "./ColBox";

export default {
  name: "BranchWrap",
  props: {
    branchWrapData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    ColBox,
    EndNode,
    ConditionNode
  }
};
</script>