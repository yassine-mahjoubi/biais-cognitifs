import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './plugins/i18/index'
import { createHead } from '@unhead/vue'

import './assets/css/main.css'

import App from './App.vue'
import router from './router'
const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(head)
app.mount('#app')
