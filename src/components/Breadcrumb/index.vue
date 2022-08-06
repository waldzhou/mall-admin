<template>
  <div :class="{ 'crumb-container': true, active: $store.state.collapsed }">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href>统计</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        欢迎 waldzhou
        <a-icon type="down" />
      </li>
      <li>退出</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("changeCollapsed");
    },
  },
};
</script>

<style lang="less" scoped>
.crumb-container {
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding-right: 30px;
  border-bottom: 1px solid #eee;
  transition: all 0.3s;
  &.active {
    margin-left: -100px;
  }
  .breadcrumb {
    display: inline-block;
    margin-left: 20px;
  }
  .user-info {
    float: right;
    text-align: center;
    cursor: pointer;
    li:not(:first-child) {
      display: none;
      &:hover {
        background-color: #eee;
        color: #999;
        font-weight: 700;
        display: block;
      }
    }
    &:hover {
      li {
        display: block;
      }
    }
  }
}
</style>
