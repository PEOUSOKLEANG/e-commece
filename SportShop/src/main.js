import './assets/main.css' 
import './assets/selectionpayment.css'
import './assets/discount.css'
import './assets/goshop.css'
import './assets/payment.css'



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
