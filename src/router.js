import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export const router = new VueRouter({
    routes: [{
        path: '',
        name: 'HelloWorld',
        component: HelloWorld,
    }] 
});

router.afterEach((to) => {
    console.log('$store',router.app.$store)
});