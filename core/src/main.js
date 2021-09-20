import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import '@primer/css/index.scss'


const app = createApp(App)
app.use(store)
app.mount('#app')
