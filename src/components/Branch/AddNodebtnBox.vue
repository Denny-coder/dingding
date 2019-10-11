<template>
  <div class="add-node-btn-box">
    <div class="add-node-btn">
      <button @click="printData">+</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddNodebtnBox",
  props: {
    addNodebtnBoxData: {
      type: [Object, Array]
    }
  },
  methods: {
    printData() {
      console.log(this.addNodebtnBoxData);
    }
  }
};
</script>