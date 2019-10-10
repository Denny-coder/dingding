<script>
export default {
  props: {
    RecursionNodeData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  name: "RecursionNode",
  components: {
    AddNode: () => import("./AddNode.vue"),
    ConditionNode: () => import("./ConditionNode.vue"),
    BranchWrap: () => import("./BranchWrap.vue")
  },
  render: function(createElement) {
      
    return createElement("h1", 1);
  }
};
</script>