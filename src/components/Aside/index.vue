<template>
      <div class="menu-container">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
        <a-sub-menu  v-for="i in $store.state.menuRoutes" :key="i.name">
          <span slot="title">
            <a-icon type="mail" />
            <span >{{i.meta.title}}</span>
          </span>
          <a-menu-item v-for="index in i.children" :key="index.name">{{index.meta.title}}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.menu-container{
   height: 100%;
   position: fixed;
   .ant-menu{
    height: 100%;
   }
}
</style>
