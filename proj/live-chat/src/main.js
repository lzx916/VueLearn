import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { projectAuth } from './firebase/config'


// 等待firebase连接建立后再渲染页面
let app
projectAuth.onAuthStateChanged(() => {
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
})