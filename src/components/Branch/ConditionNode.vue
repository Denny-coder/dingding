<template>
  <div class="condition-node">
    <div class="condition-node-box">
      <div class="auto-judge">{{conditionNodeData.name}}</div>
      <div class="add-node-btn">
        <button>+</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConditionNode",
  props: {
    conditionNodeData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>