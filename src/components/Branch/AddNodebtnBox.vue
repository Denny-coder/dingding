<template>
  <div class="add-node-btn-box">
    <div class="add-node-btn">
      <button @click="printData">++</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddNodebtnBox",
  inject: ["$bus"],
  props: {
    addNodebtnBoxData: {
      type: [Object, Array]
    },
    parentAddNodebtnBoxData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    printData() {
      console.log(this.parentAddNodebtnBoxData);
    }
  }
};
</script>