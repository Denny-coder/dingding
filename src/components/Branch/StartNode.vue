<template>
  <div class="node-wrap">
    <div class="node-wrap-box">{{startNodeData.name}}</div>
    <div class="add-node-btn-box">
      <div class="add-node-btn">
        <button>+</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StartNode",
  props: {
    startNodeData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>