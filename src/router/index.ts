//  导入 vue-router 插件
import { createRouter,createWebHashHistory } from 'vue-router'

// 路由表
let routes = [
    {
        path:'/',
        component:() =>import( '../components/main/main.vue')
    }
]


// 创建 router 对象
let router = createRouter({
    history:createWebHashHistory(),
    routes
})


// 默认共享 router 对象
export default router
