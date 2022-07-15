<script setup lang="ts">
// import { onMounted } from 'vue';
import AppProvider from '@/components/AppProvider/index.vue';

// onMounted(() => {
//   $loadingBar.start();
//   setTimeout(() => {
//     $loadingBar.finish();
//     $message.success('加载完成,Perfect~');
//   }, 500);
// });
</script>

<template>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
</template>

<style lang="scss">
#app {
  height: 100%;
  .n-config-provider {
    height: inherit;
  }
}
</style>
