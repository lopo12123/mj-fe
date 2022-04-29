import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue(), vueJsx() ],
    server: {
        proxy: {
            '/api': 'http://127.0.0.1:8899'
        }
    },
    resolve: {
        alias: {
            '@': resolve('src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false
            }
        }
    }
})
