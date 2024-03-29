import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const routes = [
    {
        path: '/HelloWorld',
        component: HelloWorld
    },
    {
        path: '/TheWelcome',
        component: TheWelcome
    },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;