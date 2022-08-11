<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="aside">
        <Aside></Aside>
        </div>
      </template>
      <template #main>
        <div class="crumb">
          <Breadcrumb></Breadcrumb>
        </div>
        <router-view></router-view>
      </template>
    </Layout>
    
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import Aside from "@/components/Aside";
import Breadcrumb from "@/components/Breadcrumb"

export default {
  components: {
    Layout,
    Aside,
    Breadcrumb
  },
};
</script>

<style lang="less">
.aside{
  width: 200px;
  height: 100%;
}
</style>
