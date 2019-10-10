<template>
  <div style="width: 100%;">
    <Branch :branchData="branchNodeList"></Branch>
  </div>
</template>

<script>
import Branch from "./Branch/Index";

export default {
  components: {
    Branch
  },
  data() {
    return {
      branchNodeList: {
        name: "发起人",
        nodeId: "sid-startevent",
        type: "start",
        childNode: {
          type: "route",
          prevId: "sid-startevent",
          nodeId: "fae5_84ed",
          conditionNodes: [
            {
              name: "条件1",
              type: "condition",
              prevId: "fae5_84ed",
              nodeId: "9fc5_9f65",
              properties: {
                conditions: [
                  [
                    {
                      type: "dingtalk_actioner_range_condition",
                      paramKey: "MoneyField-K1IM19Z9",
                      paramLabel: "金额（元）",
                      lowerBound: 3333,
                      upperBound: "",
                      isEmpty: false,
                      valid: "valid"
                    }
                  ]
                ]
              },
              childNode: {
                type: "route",
                prevId: "9fc5_9f65",
                nodeId: "0cf9_512e",
                conditionNodes: [
                  {
                    name: "条件1",
                    type: "condition",
                    prevId: "0cf9_512e",
                    nodeId: "bded_c4c7",
                    properties: {
                      conditions: [
                        [
                          {
                            type: "dingtalk_actioner_range_condition",
                            paramKey: "MoneyField-K1IM19Z9",
                            paramLabel: "金额（元）",
                            lowerBound: 3233,
                            upperBound: "",
                            isEmpty: false,
                            valid: "valid"
                          }
                        ]
                      ]
                    }
                  },
                  {
                    name: "条件2",
                    type: "condition",
                    prevId: "0cf9_512e",
                    nodeId: "5370_6d32",
                    properties: { conditions: [] },
                    childNode: {
                      type: "route",
                      prevId: "5370_6d32",
                      nodeId: "167e_1a91",
                      conditionNodes: [
                        {
                          name: "条件1",
                          type: "condition",
                          prevId: "167e_1a91",
                          nodeId: "a229_fea2",
                          properties: {
                            conditions: [
                              [
                                {
                                  type: "dingtalk_actioner_range_condition",
                                  paramKey: "MoneyField-K1IM19Z9",
                                  paramLabel: "金额（元）",
                                  lowerBound: 4444,
                                  upperBound: "",
                                  isEmpty: false,
                                  valid: "valid"
                                }
                              ]
                            ]
                          }
                        },
                        {
                          name: "条件2",
                          type: "condition",
                          prevId: "167e_1a91",
                          nodeId: "92d4_db0a",
                          properties: { conditions: [] }
                        }
                      ],
                      properties: {}
                    }
                  }
                ],
                properties: {}
              }
            },
            {
              name: "条件2",
              type: "condition",
              prevId: "fae5_84ed",
              nodeId: "ca0b_2ffd",
              properties: { conditions: [] },
              childNode: {
                name: "UNKNOWN",
                type: "approver",
                prevId: "ca0b_2ffd",
                nodeId: "839e_acb1",
                properties: {
                  activateType: "ONE_BY_ONE",
                  agreeAll: false,
                  actionerRules: [
                    {
                      type: "target_management",
                      level: 1,
                      isEmpty: false,
                      autoUp: true
                    }
                  ],
                  noneActionerAction: "admin"
                }
              }
            }
          ],
          properties: {}
        }
      }
    };
  },
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    add() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
* {
  box-sizing: border-box;
}
// .add.button {

// }
.box-scale {
  min-width: min-content;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  .add-node-btn-box {
    width: 220px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      margin: auto;
      width: 2px;
      height: 100%;
      background-color: #fb1313;
    }
  }
  .add-node-btn {
    user-select: none;
    width: 240px;
    padding: 20px 0 32px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    -webkit-box-flex: 1;
    flex-grow: 1;
    button {
      width: 30px;
      height: 30px;
    }
  }
}
.branch-wrap {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
  width: 100%;

  .branch-box-wrap {
    display: flex;
    overflow: visible;
    min-height: 180px;
    height: auto;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    .branch-box {
      display: flex;
      overflow: visible;
      min-height: 180px;
      height: auto;
      border-bottom: 2px solid red;
      border-top: 2px solid red;
      position: relative;
      margin-top: 15px;
      width: 100%;
      .add-branch {
        border: none;
        outline: none;
        user-select: none;
        justify-content: center;
        font-size: 12px;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        color: #3296fa;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        position: absolute;
        top: -16px;
        left: 50%;
        transform: translateX(-50%);
        transform-origin: center center;
        cursor: pointer;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      .col-box {
        display: inline-flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        background: #fff;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          margin: auto;
          width: 2px;
          height: 100%;
          background-color: red;
        }
        .condition-node {
          display: inline-flex;
          flex-direction: column;
          min-height: 220px;
        }
        .condition-node-box {
          padding: 30px 50px 0px 50px;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          position: relative;
          display: inline-flex;
          flex-direction: column;
          .auto-judge {
            position: relative;
            width: 220px;
            min-height: 72px;
            background: #fff;
            padding: 14px 19px;
            cursor: pointer;
            border: 1px solid blue;
            background-color: #f5f5f7;
          }
        }
      }
    }
  }
}
.node-wrap {
  padding: 0 50px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  flex-grow: 1;
  flex-wrap: wrap;
  .node-wrap-box {
    width: 220px;
    border: 1px solid blue;
    min-height: 72px;
    background-color: #f5f5f7;
    z-index: 1;
  }
}
.top-left-cover-line,
.top-right-cover-line {
  position: absolute;
  height: 3px;
  width: 50%;
  background-color: #f5f5f7;
  top: -2px;
}
.top-left-cover-line {
  left: -1px;
}
.bottom-left-cover-line {
  left: -1px;
}
.top-right-cover-line {
  right: -1px;
}
.bottom-right-cover-line {
  right: -1px;
}
.top-left-cover-line,
.top-right-cover-line {
  position: absolute;
  height: 3px;
  width: 50%;
  background-color: #fff;
  top: -2px;
}
.bottom-left-cover-line,
.bottom-right-cover-line {
  position: absolute;
  height: 3px;
  width: 50%;
  background-color: #fff;
  bottom: -2px;
}
</style>
