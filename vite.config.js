import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 把 'my-portfolio' 換成你的 GitHub repo 名稱
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})