import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置路径别名 需要下载 @types/node 解决ts报错
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
})
