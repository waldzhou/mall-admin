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
        <a-breadcrumb-item>{{
          menuRoute[0] ? menuRoute[0].meta.title : ""
        }}</a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{ name: menuRoute[1] ? menuRoute[1].name : '' }">{{
            menuRoute[1] ? menuRoute[1].meta.title : ""
          }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>
        欢迎 {{ $store.state.user.username }}
        <a-icon type="down" />
      </li>
      <li @click="handleLogout">退出</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuRoute: {},
      // {
      //   name: "home",
      //   meta: {
      //     title: "首页",
      //   },
      // },
      // { name: "count",
      // meta:{
      //   title:'统计'
      // } },
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("changeCollapsed");
    },
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "login" });
    },
  },
  created() {
    console.log(this.$router.currentRoute.matched[0].meta.title);
  },
  watch: {
    $route() {
      this.menuRoute = this.$router.currentRoute.matched;
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
