import vue from '@vitejs/plugin-vue';
/** 插件
 * vite-plugin-vue-setup-extend：扩展setup插件，支持在script标签中使用name属性
 * rollup-plugin-visualizer：rollup打包分析插件
 * vite-plugin-html：一个针对 index.html，提供压缩和基于 ejs 模板功能的 vite 插件
 * unocss： 出自antfu的原子化css
 */

/**
 * * 扩展setup插件，支持在script标签中使用name属性
 * usage: <script setup name="MyComp"></script>
 */
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import visualizer from 'rollup-plugin-visualizer'; //rollup打包分析插件

// 集成 vite-plugin-html 主要是为了对 index.html 进行压缩和注入动态数据，例如替换网站标题和cdn
import { configHTMLPlugin } from './html';
import { unocss } from './unocss';

/**
 * * 组件库按需引入插件
 * usage: 直接使用组件,无需在任何地方导入组件
 */
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [
    vue(),
    VueSetupExtend(),
    configHTMLPlugin(viteEnv, isBuild),
    unocss(),
    Components({ resolvers: [NaiveUiResolver()] }),
  ];

  if (isBuild) {
    plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true }));
  }

  return plugins;
}
