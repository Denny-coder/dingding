<script>
export default {
  name: "BranchWrap",
  props: {
    branchWrapData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    parentBranchWrapData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  beforeCreate: function() {
    this.$options.components.ColBox = require("./ColBox.vue").default;
    this.$options.components.AddNodebtnBox = require("./AddNodebtnBox.vue").default;
  },
  methods: {
    addBranch(data) {
      console.log(data);
    }
  },
  render(createElement) {
    let domList = [
      createElement(
        "button",
        {
          attrs: {
            class: "add-branch"
          },
          on: {
            click: () => {
              this.addBranch(this.parentBranchWrapData);
            }
          }
        },
        "添加条件"
      )
    ];
    this.branchWrapData.forEach((item, index) => {
      domList = domList.concat([
        createElement("ColBox", {
          props: {
            isRight: index === this.branchWrapData.length - 1,
            isLeft: index === 0,
            colBoxData: item
          },
          key: item.name
        })
      ]);
    });
    return createElement(
      "div",
      {
        attrs: {
          class: "branch-wrap"
        }
      },
      [
        createElement(
          "div",
          {
            attrs: {
              class: "branch-box-wrap"
            }
          },
          [
            createElement(
              "div",
              {
                attrs: {
                  class: "branch-box"
                }
              },
              domList
            ),
            createElement("AddNodebtnBox", {
              props: {
                addNodebtnBoxData: this.branchWrapData,
                parentAddNodebtnBoxData: this.parentBranchWrapData
              }
            })
          ]
        )
      ]
    );
  }
};
</script>