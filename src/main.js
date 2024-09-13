import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import TeamsApp from '@/TeamsApp.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGear } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGear)

const app = createApp(TeamsApp).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(createPinia())

app.mount('#app')
