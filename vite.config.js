import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
  publicPath: '/dy-hw-12-12/',
  base: './',
  plugins: [
    vue(),
    Components({
      deep: true,
      dirs: ['src/components'],
      extensions: ['vue'],
      resolvers: [AntDesignVueResolver()],
    }),
    AutoImport({
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      imports: [
        // presets
        'vue',
        'vue-router',
      ],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
    }),
    Pages({
      dirs: 'src/views',
    }),
    Layouts(),
  ],
})
