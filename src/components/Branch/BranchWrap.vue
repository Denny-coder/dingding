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
  </div>
</template>
<script>
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
    ColBox
  },
  render(createElement) {
    let domList = [
      createElement(
        "button",
        {
          attrs: {
            class: "add-branch"
          }
        },
        "添加条件"
      )
    ];
    this.branchWrapData.forEach((item, index) => {
      domList = domList.concat([
        createElement("ColBox", {
          attrs: {
            class: "branch-box"
          },
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
      createElement(
        "div",
        {
          attrs: {
            class: "branch-box-wrap"
          }
        },
        createElement(
          "div",
          {
            attrs: {
              class: "branch-box"
            }
          },
          domList
        )
      )
    );
  }
};
</script>