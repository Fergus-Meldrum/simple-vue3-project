import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import TeamsApp from '@/TeamsApp.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/index.css'

const app = createApp(TeamsApp)

app.use(router)
app.use(createPinia())

app.mount('#app')
