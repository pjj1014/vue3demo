//引入的不再是 Vue 构造函数了，引入的是一个名为 createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//创建应用实例对象--app(类似于之前 Vue2 中的 vm ,但 app 比 vm 更“轻”)
const app = createApp(App).use(store).use(router)

//挂载
app.mount('#app')

// createApp(App).mount('#app')

/*const vm = new Vue({
    render : h => h(App)
})
vm.$mount('#app')*/