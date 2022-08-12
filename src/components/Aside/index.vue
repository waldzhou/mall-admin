<template>
  <div class="menu-container">
      <a-menu
        :default-selected-keys="[$router.currentRoute.matched[1]?$router.currentRoute.matched[1].name:'']"
        :default-open-keys="[$router.currentRoute.matched[0].name]"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
       >
        <template v-for="i in $store.state.menuRoutes">
        <a-sub-menu :key="i.name" v-if="i.meta.show">
            <span slot="title">
              <a-icon :type="i.meta.icon" />
              <span>{{ i.meta.title }}</span>
            </span>
            <a-menu-item v-for="index in i.children" :key="index.name">
              <router-link :to="{name:index.name}">
              <a-icon :type="index.meta.icon" />
              {{ index.meta.title }}
              </router-link>
            </a-menu-item>
        </a-sub-menu>
    </template>
      </a-menu>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$router);
  }
};
</script>

<style lang="less" scoped>
.menu-container {
  height: 100%;
  width: 180px;
  position: fixed;
  .ant-menu {
    height: 100%;
  }
}
</style>
