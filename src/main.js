import { createApp } from 'vue'
import App from './App.vue'
import VueClipboard from 'vue3-clipboard'
import router from './views/index'

createApp(App)
    .use(router)
    .use(VueClipboard, {
        autoSetContainer: true,
        appendToBody: true,
    })
    .mount('#app')

